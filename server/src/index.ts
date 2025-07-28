import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { z } from 'zod';

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

server.listen(3001, () => {
  console.log('✅ Server running on http://localhost:3001');
});