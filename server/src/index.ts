import express, { Request, Response } from 'express';
import http from 'http';
import bcrypt from 'bcrypt';
import { Server } from 'socket.io';
import cors from 'cors';
import { z } from 'zod';
import pool from './db';

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

type LoginData = z.infer<typeof LoginSchema>;

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

app.post( '/api/register', ( request : Request, response : Response ) => {

  const result = LoginSchema.safeParse(request.body);

  console.log('Register attempt:', request.body);
});

app.post( '/api/login', async ( request : Request, response : Response ) => {

  const result = LoginSchema.safeParse(request.body);

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

    // Successful login
    return response.status(200).json({ message: 'Login successful', userId: user.id });

  } catch (error) {
    console.error('Login error:', error);
    return response.status(500).json({ message: 'Internal server error' });
  }

})

server.listen(3001, () => {
  console.log('✅ Server running on http://localhost:3001');
});