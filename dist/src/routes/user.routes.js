"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
const validateFields_1 = require("../middlewares/validateFields");
const router = (0, express_1.Router)();
router.get('/', (0, validateJWT_1.default)(), user_controller_1.getUsers);
router.post("/create", [
    (0, validateJWT_1.default)(),
    validateFields_1.validateFieldsRequest
], user_controller_1.createUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map