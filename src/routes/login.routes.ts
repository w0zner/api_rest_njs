import { Router } from "express";
import { check } from "express-validator";
import login from "../controllers/login.controller";
import labels from "../labels";

const router = Router()

router.post('/login', 
check('username', labels.REQUIRED_FIELD).not().isEmpty(),
check('password', labels.REQUIRED_FIELD).not().isEmpty(),
check('role', labels.REQUIRED_FIELD).not().isEmpty(),
check('status', labels.REQUIRED_FIELD).not().isEmpty(),
login)



export default router