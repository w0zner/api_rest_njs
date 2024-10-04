import { connect } from "mongoose"

const db_connection = async () => {
    try {
        await connect(process.env.CONNECTION_DB_MONGO_LOCAL || '')
    } catch (error) {
        console.error(error)
    }
}

export default db_connection