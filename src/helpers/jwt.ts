import { sign } from 'jsonwebtoken'

const getJWT = (uid: string) => {
    try {

        return new Promise((resolve, reject) => {
            const payload = { uid }
            sign(payload, process.env.SECRET_KEY || '') 
        })
        
    } catch (error) {
        
    }
}