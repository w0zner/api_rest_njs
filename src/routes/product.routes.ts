import { Router } from "express";
import { createProduct, deleteProduct, getProducts, getProductsByPrice, updateProduct } from "../controllers/product.controller";
import validateJWT from "../middlewares/validateJWT";
import { validateFieldsRequest } from "../middlewares/validateFields";
import { check } from "express-validator";
import labels from "../labels";
import { productExist } from "../helpers/db.validators";

const router = Router()

router.get("/", validateJWT("USER"), getProducts)
router.get("/byprice", getProductsByPrice)
router.post("/create",[validateFieldsRequest], createProduct)
router.put("/update/:id", [validateJWT(""), check('id', "ID no válido").isMongoId(), check('id').custom(productExist), validateFieldsRequest], updateProduct)
router.delete("/delete/:id",[check('id', "ID no válido").isMongoId(), check('id').custom(productExist)], deleteProduct)

export default router