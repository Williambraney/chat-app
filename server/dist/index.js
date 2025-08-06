"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var socket_io_1 = require("socket.io");
var cors_1 = __importDefault(require("cors"));
var zod_1 = require("zod");
var db_1 = __importDefault(require("./db"));
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
app.get('/api/ping', function (_, res) {
    res.send('pong');
});
app.post('/api/register', function (request, response) {
    var result = LoginSchema.safeParse(request.body);
    console.log('Register attempt:', request.body);
});
app.post('/api/login', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, userName, password, dbResult, user, isMatch, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('Login attempt:', request.body);
                result = LoginSchema.safeParse(request.body);
                if (!result.success) {
                    return [2 /*return*/, response.status(400).json({ message: 'Invalid request body' })];
                }
                _a = result.data, userName = _a.userName, password = _a.password;
                console.log('password');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, db_1.default.query('SELECT * FROM users WHERE userName = $1', [userName])];
            case 2:
                dbResult = _b.sent();
                user = dbResult.rows[0];
                if (!user) {
                    return [2 /*return*/, response.status(401).json({ message: 'User not found' })];
                }
                return [4 /*yield*/, bcrypt_1.default.compare(password, user.password_hash)];
            case 3:
                isMatch = _b.sent();
                console.log('Password match:', isMatch);
                if (!isMatch) {
                    return [2 /*return*/, response.status(401).json({ message: 'Invalid password' })];
                }
                // Successful login
                return [2 /*return*/, response.status(200).json({ message: 'Login successful' })];
            case 4:
                error_1 = _b.sent();
                console.error('Login error:', error_1);
                return [2 /*return*/, response.status(500).json({ message: 'Internal server error' })];
            case 5: return [2 /*return*/];
        }
    });
}); });
server.listen(3001, function () {
    console.log('✅ Server running on http://localhost:3001');
});
