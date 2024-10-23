import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller";
import validateJWT from "../middlewares/validateJWT";
import { validateFieldsRequest } from "../middlewares/validateFields";

const router = Router()

router.get('/', 
validateJWT(),
getUsers)

router.post(
"/create", 
[
    validateJWT(),
    validateFieldsRequest
],
createUser)

export default router