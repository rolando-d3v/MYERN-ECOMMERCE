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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.deleteUser = exports.createUser = exports.getUsers = void 0;
var client_1 = require("@prisma/client");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var prisma = new client_1.PrismaClient();
//OBTIENE ALL REGISTRO
//********************************/
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.user.findMany({
                        select: {
                            email: true,
                            name: true,
                        },
                    })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.json(user)];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ msn: "Error Server 😕 ❗️❗️" })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
//CREATE ONE REGISTRO
//********************************/
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userx, user, _a, _b, err_2;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                userx = req.body;
                _e.label = 1;
            case 1:
                _e.trys.push([1, 4, , 5]);
                _b = (_a = prisma.user).create;
                _c = {};
                _d = {
                    name: userx.name,
                    email: userx.email,
                    dni: Number(userx.dni),
                    apellido: userx.apellido
                };
                return [4 /*yield*/, bcryptjs_1.default.hash(userx.password, 10)];
            case 2: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.password = _e.sent(),
                        _d),
                        _c)])];
            case 3:
                user = _e.sent();
                return [2 /*return*/, res.json({ msn: "Registro created success 😃 ✔️" })];
            case 4:
                err_2 = _e.sent();
                console.log(err_2);
                return [2 /*return*/, res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err: err_2 })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
//DELETED ONE USER
//********************************/
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idx, userId, user, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                idx = Number(req.params.id);
                return [4 /*yield*/, prisma.user.findUnique({
                        where: { id: idx },
                    })];
            case 1:
                userId = _a.sent();
                if (!userId) {
                    return [2 /*return*/, res.status(400).json({ msn: "Registro not found ❗️" })];
                }
                return [4 /*yield*/, prisma.user.delete({
                        where: { id: idx },
                    })];
            case 2:
                user = _a.sent();
                return [2 /*return*/, res.json({ msn: "Registro deleted success  ✔️", user: user })];
            case 3:
                err_3 = _a.sent();
                console.log(err_3);
                return [2 /*return*/, res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err: err_3 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
