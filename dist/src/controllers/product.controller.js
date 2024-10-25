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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductsByPrice = exports.getProducts = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const labels_1 = __importDefault(require("../labels"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.default.find();
        if (products.length === 0) {
            res.status(204).json({
                msg: "No se encontraron registros",
                products
            });
        }
        else {
            res.status(200).json({
                products
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.ERROR_INTERNO,
            response: labels_1.default.ERROR
        });
    }
});
exports.getProducts = getProducts;
const getProductsByPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { min, max } = req.query;
        console.log(min, max);
        const products = yield product_model_1.default.find({ price: { $gte: min, $lte: max } });
        if (products.length === 0) {
            console.log("2");
            res.status(206).json({
                msg: labels_1.default.REGISTER_NOT_FOUND,
                products
            });
        }
        else {
            res.status(200).json({
                products
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.ERROR_INTERNO,
            response: labels_1.default.ERROR
        });
    }
});
exports.getProductsByPrice = getProductsByPrice;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, quantity, status } = req.body;
        const product = new product_model_1.default({ name, description, price, quantity, status });
        yield product.save();
        res.status(201).json({
            msg: labels_1.default.SUCCESSFUL_REGISTER,
            product
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.ERROR_INTERNO,
            response: labels_1.default.ERROR
        });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const _a = req.body, { _id } = _a, campos = __rest(_a, ["_id"]);
        const product = yield product_model_1.default.findByIdAndUpdate(id, campos);
        res.status(206).json({
            msg: "Registro actualizado exitosamente",
            product
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.ERROR_INTERNO,
            response: labels_1.default.ERROR
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield product_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            msg: "Registro eliminado exitosamente",
            product_id: id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.ERROR_INTERNO,
            response: labels_1.default.ERROR
        });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map