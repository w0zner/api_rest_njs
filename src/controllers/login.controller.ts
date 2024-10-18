import { Request, Response } from "express";
import LoginModel from "../models/login.model";
import Login from "../models/login.model"
import labels from "../labels";
import bcrypt from "bcryptjs"
import getJWT from "../helpers/jwt";

const login = async (req: Request, res: Response) => {
    try {
        
        const {username, password} = req.body;

        const user = await Login.findOne({username})

        if(!user) {
            res.status(400).json({
                msg: labels.MSG_400,
                response: labels.FAILED_LOGIN
            })
        }

        if(user) { 
            if(!user._status){
                res.status(400).json({
                    msg: labels.MSG_400,
                    response: labels.STATUS_USER
                })
            }
    
            const validPassword = bcrypt.compareSync(password, user._password)
    
            if(!validPassword) {
                res.status(400).json({
                    msg: labels.MSG_400,
                    response: labels.FAILED_LOGIN
                })
            }
    
            const token = await getJWT(String(user._id))
    
            res.status(200).json({
                msg: labels.SUCCESSFUL_LOGIN,
                username: user._username,
                token,
                expiresIn: 3600
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

export default login