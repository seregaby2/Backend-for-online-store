const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const authMiddleWare = require('../middleware/CheckAuthorizationMiddleWare')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleWare, userController.check)


module.exports = router