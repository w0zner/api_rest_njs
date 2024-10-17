import express, { Application } from "express"
import labels from "../labels"
import db_connection from "../database/config"
import loginRoutes from "../routes/login.routes"

class Server {
    private app: Application
    private port: string 

    //paths
    private login_paths: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT || "3200" 

        this.login_paths = "/api/login"

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
    }

    middlewares() {
        //TODO: CORS
        this.app.use(express.json())
    }

}

export default Server