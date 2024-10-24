import { Request, Response } from "express";
import Product from "../models/product.model"
import labels from "../labels";

export const getProducts = async (req: Request, res: Response) => {
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

export const getProductsByPrice = async (req: Request, res: Response):Promise<any> => {
    try {
        const {min, max} = req.query

        console.log(min, max)

        const products = await Product.find({price: {$gte: min, $lte: max}})

        if(products.length === 0) {
            console.log("2")
            res.status(206).json({
                msg: labels.REGISTER_NOT_FOUND,
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

export const createProduct = async (req: Request, res: Response) => {
    try {
        const {name, description, price, quantity, status} = req.body

        const product = new Product( {name, description, price, quantity, status})

        await product.save()

        res.status(201).json({
            msg: labels.SUCCESSFUL_REGISTER,
            product
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.ERROR_INTERNO,
            response: labels.ERROR
        })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const {_id, ...campos} = req.body

        const product = await Product.findByIdAndUpdate(id, campos)

        res.status(206).json({
            msg: "Registro actualizado exitosamente",
            product
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.ERROR_INTERNO,
            response: labels.ERROR
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await Product.findByIdAndDelete(id)

        res.status(200).json({
            msg: "Registro eliminado exitosamente",
            product_id: id
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.ERROR_INTERNO,
            response: labels.ERROR
        })
    }
}