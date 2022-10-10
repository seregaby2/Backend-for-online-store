const Router = require('express')
const router = new Router()
const deviceRouter = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleWare')

router.post('/',checkRole('ADMIN'), deviceRouter.create)
router.get('/', deviceRouter.getAll)
router.get('/:id', deviceRouter.getOne)
router.delete('/:id', deviceRouter.delete)


module.exports = router