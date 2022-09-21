const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    if(req.method === 'OPTION') {
        next()
    }
    
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(401).json({message: 'user unauthorizated'})
        }
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    }
    catch(e) {
        res.status(401).json({message: 'user unauthorizated'})
    }
}