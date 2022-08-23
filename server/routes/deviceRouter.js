const Router = require('express')
const router = new Router()
const deviceRouter = require('../controllers/deviceController')

router.post('/', deviceRouter.create)
router.get('/', deviceRouter.getAll)
router.get('/:id', deviceRouter.getOne)


module.exports = router