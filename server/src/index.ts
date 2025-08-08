import express, { Request, Response } from 'express';

// Extend Express Request type to include userName
declare global {
  namespace Express {
    interface Request {
      userName?: string;
    }
  }
}
import http from 'http';
import bcrypt from 'bcrypt';
import { Server } from 'socket.io';
import cors from 'cors';
import { z } from 'zod';
import pool from './db';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { authenticationToken } from './middleware/authenticationToken';

dotenv.config(); // This loads environment variables from .env file

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());

const MessageSchema = z.object({
  username: z.string(),
  content: z.string()
});

const LoginSchema = z.object({
  userName: z.string(),
  password: z.string()
});

const RegisterSchema = z.object({
  userName: z.string(),
  email: z.email(),
  password: z.string().min(3).max(100),
  avatar: z.string().optional(),
  dateOfBirth: z.coerce.date()
});

type LoginData = z.infer<typeof LoginSchema>;

type RegisterData = z.infer<typeof RegisterSchema>;

io.on('connection', (socket) => {
  console.log(`🔌 User connected: ${socket.id}`);

  socket.on('chat:message', (data) => {
    const result = MessageSchema.safeParse(data);
    if (!result.success) return;

    io.emit('chat:message', result.data);
  });

  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});

app.get('/ping', (_, res) => {
  res.send('pong');
});

app.post( '/api/register', async( request : Request, response : Response ) => {

  const result = RegisterSchema.safeParse(request.body);

  if (!result.success) {
    return response.status(400).json({ message: 'Invalid request body' });
  }
  const { userName, email, password, avatar, dateOfBirth }: RegisterData = result.data;

  try {

    // Check if user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE userName = $1 OR email = $2', [ userName, email ]);

    if( userExists.rows.length > 0 ) {
      return response.status(409).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 8);

    const normalisedEmail = email.toLowerCase();

    // Insert new user into the database
    await pool.query(
      'INSERT INTO users (userName, email, password_hash, avatar, date_of_birth) VALUES ($1, $2, $3, $4, $5)',
      [ userName, normalisedEmail, hashedPassword, avatar || null, dateOfBirth ]
    );

    return response.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Registration error:', error);
    return response.status(500).json({ message: 'Internal server error' });
  }
  
});

app.get( '/api/me', authenticationToken, ( request : Request, response : Response ) => {

  const { userName } = request;

  return response.status(200).json({ userName });

});

app.post( '/api/login',  async ( request : Request, response : Response ) => {

  const result = LoginSchema.safeParse(request.body);

  const JWT_SECRET = process.env.JWT_SECRET; // This is your JWT secret that comes from .env

  if( !JWT_SECRET ){
    return response.status(500).json({ message: 'JWT secret is not configured on the server.' });
  }

  if (!result.success) {
    return response.status(400).json({ message: 'Invalid request body' });
  }

  const { userName, password }: LoginData = result.data;

  try {

    // Get users by userName
    const dbResult = await pool.query('SELECT * FROM users WHERE userName = $1', [ userName ] );

    const user = dbResult.rows[0];

    if( !user ){
      return response.status(401).json({ message: 'User not found' });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare( password, user.password_hash );

    
    if (!isMatch) {
      return response.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userName }, JWT_SECRET, {
      expiresIn: '1h'
    })

    // Successful login
    return response.status(200).json({ message: 'Login successful', userName, token });

  } catch (error) {
    console.error('Login error:', error);
    return response.status(500).json({ message: 'Internal server error' });
  }

})

server.listen(3001, () => {
  console.log('✅ Server running on http://localhost:3001');
});