import express, { Request, Response } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { z } from 'zod';

type LoginRequestBody = {
  userName: string;
  password: string;
}

type LoginResponseBody = {
  message: string;
}

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

app.post( '/api/login', ( request : Request, response : Response ) => {

  const result = LoginSchema.safeParse(request.body);

  console.log('Login attempt:', request.body);  

  if (!result.success) {
    return response.status(400).json({ message: 'Invalid request body' });
  }

  const { userName, password } = result.data;

  if (userName === 'test' && password === 'password') {
    return response.status(200).json({ message: 'Login successful' });
  }

  return response.status(401).json({ message: 'Invalid credentials' });

} )

server.listen(3001, () => {
  console.log('✅ Server running on http://localhost:3001');
});