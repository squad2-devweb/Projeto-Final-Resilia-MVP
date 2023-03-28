import jwt from 'jsonwebtoken'
import User from '../models/User'
import bcrypt from 'bcryptjs'
// import { checkPassword } from '../services/auth'
import authConfig from '../config/auth'

class SessionController {
    async create(req,res){
        const { email, password} = req.body
        const user = await User.findOne({
            email,
        })
        if(!user){
            return res.status(401).json({
                error: "User or Password invalid."
            })
        }

        // if(!checkPassword(user,password)){

        //     return res.status(401).json({
        //         error:"User or Password invalid"
        //     })
        // }
        const checkPassword =
        bcrypt.compare(password, user.password, (err, data) => {
            //if error than throw error
            if (err) throw err
    
            //if both match than you can do anything
            if (data) {
                console.log({ msg: "Login success" })
                const { id } = user
                        return res.json({
                            user:{
                                id,
                                email
                            },
                            token: jwt.sign({ id }, authConfig.secret,{
                                expiresIn: authConfig.expiresIn,
                            })
                        })
            } else {
                console.log({ msg: "Invalid credencial" })
            }
            return true
        })
        console.log('ue',checkPassword)

       
    }
}
export default new SessionController()