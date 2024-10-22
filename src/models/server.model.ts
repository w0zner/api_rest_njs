import express, { Application } from "express"
import labels from "../labels"
import db_connection from "../database/config"
import loginRoutes from "../routes/login.routes"
import userRouter from "../routes/user.routes"
import cors from "cors"

class Server {
    private app: Application
    private port: string 

    //paths
    private login_paths: string
    private user_paths: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT || "3200" 

        this.login_paths = "/api/login"
        this.user_paths = "/api/users"

        this.connectDB()
        this.middlewares()
        this.routes()
    }

    listen(){
        this.app.listen(this.port, ()=> console.log(labels.LISTEN_SERVER + this.port))
    }

    async connectDB() {
        await db_connection()
    }

    routes() {
        this.app.use(this.login_paths, loginRoutes)
        this.app.use(this.user_paths, userRouter)
    }

    middlewares() {
        //TODO: CORS
        this.app.use(cors())
        this.app.use(express.json())
    }

}

export default Server
