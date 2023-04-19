// Cliente <--> Node.js -> Express -> Middlewares -> controller
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.js'
import { promisify }  from 'util'

export default async (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            error: 'Token was not provided'
        })
    }
    const [, token] = authHeader.split(" ") 
    try {
        const decoded = await promisify(jwt.verify)(token,authConfig.secret)
        req.userId = decoded.id
        return next()
    } catch (err) {
        return res.status(401).json({
            error:'Token Invalid'
        })
    }
}

// HTTP 
//     Headers
//         Authentication:`Bearer ${token}`
//     Body
