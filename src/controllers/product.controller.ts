import { Request, Response } from "express";
import Product from "../models/product.model"
import labels from "../labels";

const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find()

        if(products.length === 0) {
            res.status(204).json({
                msg: "No se encontraron registros",
                products
            })
        } else {
            res.status(200).json({
                products
            })
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.ERROR_INTERNO,
            response: labels.ERROR
        })
    }
}