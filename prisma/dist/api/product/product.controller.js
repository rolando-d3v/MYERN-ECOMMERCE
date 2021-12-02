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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedProduct = exports.deleteProduct = exports.createProduct = exports.getProducts = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
//OBTIENE ALL REGISTRO
//********************************/
var getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pro, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.product.findMany({})];
            case 1:
                pro = _a.sent();
                // const user = await prisma.user.findMany({
                //   select: {
                //     email: true,
                //     name: true,
                //   },
                // });
                return [2 /*return*/, res.json(pro)];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ msn: "Error Server 😕 ❗️❗️" })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProducts = getProducts;
//CREATE ONE REGISTRO
//********************************/
var createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pro, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pro = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.product.create({
                        data: {
                            title: pro.title,
                            description: pro.description,
                            precio: Number(pro.precio),
                            ativo: pro.activo,
                            stock: pro.stock,
                        },
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/, res.json({ msn: "Registro created success 😃 ✔️" })];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                return [2 /*return*/, res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err: err_2 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createProduct = createProduct;
//DELETED ONE USER
//********************************/
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idx, proId, product, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                idx = Number(req.params.id);
                return [4 /*yield*/, prisma.product.findUnique({
                        where: { id: idx },
                    })];
            case 1:
                proId = _a.sent();
                if (!proId) {
                    return [2 /*return*/, res.status(400).json({ msn: "Registro not found ❗️" })];
                }
                return [4 /*yield*/, prisma.product.delete({
                        where: { id: idx },
                    })];
            case 2:
                product = _a.sent();
                return [2 /*return*/, res.json({ msn: "Registro deleted success  ✔️", product: product })];
            case 3:
                err_3 = _a.sent();
                console.log(err_3);
                return [2 /*return*/, res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err: err_3 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
var updatedProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idx, proId, pro, product, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                idx = Number(req.params.id);
                return [4 /*yield*/, prisma.product.findUnique({
                        where: { id: idx },
                    })];
            case 1:
                proId = _a.sent();
                if (!proId) {
                    return [2 /*return*/, res.status(400).json({ msn: "Registro not found ❗️" })];
                }
                pro = req.body;
                return [4 /*yield*/, prisma.product.update({
                        where: { id: idx },
                        data: {
                            title: pro.title,
                            description: pro.description,
                            precio: pro.precio,
                            ativo: pro.activo,
                        },
                    })];
            case 2:
                product = _a.sent();
                return [2 /*return*/, res.json({ msn: "Product updated success  ✔️", product: product })];
            case 3:
                err_4 = _a.sent();
                console.log(err_4);
                return [2 /*return*/, res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err: err_4 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updatedProduct = updatedProduct;
