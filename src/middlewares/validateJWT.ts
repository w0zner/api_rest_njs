import { NextFunction, Request, Response } from "express";
import labels from "../labels";
import jwt from 'jsonwebtoken'
import LoginModel from "../models/login.model";

const validateJWT = (roleToValidate?: string) => {
    return async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        try {
            const token =   req.header(labels.AUTHORIZATION)?.split(' ')[1]       
    
            if(!token) {
                return res.status(401).json({
                    msg: labels.TOKEN_FAILED
                })
            }
    
            const { uid } = <any> jwt.verify(token, process.env.SECRET_KEY || '')
            const user = await LoginModel.findById(uid)
    
            if(!user) {
                return res.status(401).json({
                    msg: labels.USER_NOT_FOUND
                })
            }
    
            if(!user._status) {
                return res.status(401).json({
                    msg: labels.USER_INACTIVE
                })
            }

            if(user._role !== roleToValidate && user._role !== "ADMIN" && roleToValidate) {
                return res.status(201).json({
                    msg: "Su rol no tiene los permisos para acceder al servicio solicitado",
                    role: user._role
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
}

export default validateJWT