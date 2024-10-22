import { Request, Response } from "express";
import Login from "../models/login.model"
import bcrypt from "bcryptjs"
import labels from "../labels";

const getUsers = async (req: Request, res: Response):Promise<any> => {
    try {
        const users = await Login.find({}, 'username role status')

        if(!users) {
            return res.status(400).json({
                msg: labels.MSG_400,
                response: labels.FAILED_LOGIN
            })
        }

        res.status(200).json({
            users
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.ERROR_INTERNO,
            response: labels.ERROR
        })
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const {username, password, role} = req.body
        const user = new Login({username, password, role})

        const salt = bcrypt.genSaltSync()
        user._password = bcrypt.hashSync(password, salt)
        await user.save()

        res.status(201).json({
            msg: labels.SUCCESSFUL_REGISTER,
            username: user._username
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: labels.ERROR_INTERNO,
            response: labels.ERROR
        })
    }
}

export {
    getUsers,
    createUser
}