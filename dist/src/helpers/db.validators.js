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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productExist = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const productExist = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productDB = yield product_model_1.default.findById(id);
        if (!productDB)
            throw new Error("El producto con id: " + id + " no existe en la base de datos.");
    }
    catch (error) {
        console.log(error);
        throw new Error("Error inesperado al validar el ID.");
    }
});
exports.productExist = productExist;
//# sourceMappingURL=db.validators.js.map