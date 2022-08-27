const  ApiError  = require("../error/ApiError")
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJWT = (email, id, role) => {
    return jwt.sign({email, id, role}, process.env.SECRET_KEY, {expiresIn:'24h'})
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role} = req.body;
        if(!email || !password) {
            return next(ApiError.badRequest('incorrect password or email'))
        }

        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badRequest('This user already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        await Basket.create({userId: user.id})
        
        const token = generateJWT(email, user.id, user.role)
        res.statusCode = 201
        return res.json(token)
    }


    async login(req, res, next) {
        const { email, password} = req.body
        
        const user = await User.findOne({where:{email}})
        if(!user) {
            return next(ApiError.badRequest('This user already exists'))
        }
        let hashPassword = bcrypt.compareSync(password, user.password)
        
        if(!hashPassword) {
            return next(ApiError.badRequest('incorrect password'))
        }

        const token = generateJWT(email, user.id, user.role)
        return res.json(token)
    }


    async check(req, res, next) {
       const {email, role, id} = req.userx
       const token = generateJWT(email, id, role)
       return res.json(token)
    }
}

module.exports = new UserController()