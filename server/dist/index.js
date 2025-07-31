"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var cors_1 = __importDefault(require("cors"));
var zod_1 = require("zod");
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
var io = new socket_io_1.Server(server, {
    cors: { origin: '*' }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var MessageSchema = zod_1.z.object({
    username: zod_1.z.string(),
    content: zod_1.z.string()
});
var LoginSchema = zod_1.z.object({
    userName: zod_1.z.string(),
    password: zod_1.z.string()
});
io.on('connection', function (socket) {
    console.log("\uD83D\uDD0C User connected: ".concat(socket.id));
    socket.on('chat:message', function (data) {
        var result = MessageSchema.safeParse(data);
        if (!result.success)
            return;
        io.emit('chat:message', result.data);
    });
    socket.on('disconnect', function () {
        console.log("\u274C User disconnected: ".concat(socket.id));
    });
});
app.get('/ping', function (_, res) {
    res.send('pong');
});
app.post('/api/login', function (request, response) {
    var result = LoginSchema.safeParse(request.body);
    if (!result.success) {
        return response.status(400).json({ message: 'Invalid request body' });
    }
    var _a = result.data, userName = _a.userName, password = _a.password;
    if (userName === 'test' && password === 'password') {
        return response.status(200).json({ message: 'Login successful' });
    }
    return response.status(401).json({ message: 'Invalid credentials' });
});
server.listen(3001, function () {
    console.log('✅ Server running on http://localhost:3001');
});
