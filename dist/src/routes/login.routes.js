"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
const labels_1 = __importDefault(require("../labels"));
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('username', labels_1.default.REQUIRED_FIELD).not().isEmpty(),
    (0, express_validator_1.check)('password', labels_1.default.REQUIRED_FIELD).not().isEmpty(),
    (0, express_validator_1.check)('role', labels_1.default.REQUIRED_FIELD).not().isEmpty(),
    (0, express_validator_1.check)('status', labels_1.default.REQUIRED_FIELD).not().isEmpty()
], login_controller_1.default);
exports.default = router;
//# sourceMappingURL=login.routes.js.map