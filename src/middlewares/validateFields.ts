import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator"
import labels from "../labels";

const validateFieldsRequest = (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                msg: labels.MSG_400,
                errors
            })
        }

        next()

    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.ERROR_INTERNO,
            response: labels.ERROR
        })
    }
}

export {
    validateFieldsRequest
}