import { Router } from "express";
import { check } from "express-validator";
import { createUser } from "../controllers/user.controller";
import labels from "../labels";

const router = Router()

router.post("/create", 
check('username', labels.REQUIRED_FIELD).not().isEmpty(),
check('password', labels.REQUIRED_FIELD).not().isEmpty(),
check('role', labels.REQUIRED_FIELD).not().isEmpty(),
check('status', labels.REQUIRED_FIELD).not().isEmpty(),
createUser)