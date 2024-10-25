"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
const validateFields_1 = require("../middlewares/validateFields");
const express_validator_1 = require("express-validator");
const db_validators_1 = require("../helpers/db.validators");
const router = (0, express_1.Router)();
router.get("/", (0, validateJWT_1.default)("USER"), product_controller_1.getProducts);
router.get("/byprice", product_controller_1.getProductsByPrice);
router.post("/create", [validateFields_1.validateFieldsRequest], product_controller_1.createProduct);
router.put("/update/:id", [(0, validateJWT_1.default)(""), (0, express_validator_1.check)('id', "ID no válido").isMongoId(), (0, express_validator_1.check)('id').custom(db_validators_1.productExist), validateFields_1.validateFieldsRequest], product_controller_1.updateProduct);
router.delete("/delete/:id", [(0, express_validator_1.check)('id', "ID no válido").isMongoId(), (0, express_validator_1.check)('id').custom(db_validators_1.productExist)], product_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.routes.js.map