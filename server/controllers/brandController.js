const ApiError = require("../error/ApiError")
const { Brand } = require("../models/models")

class BranfController {
    async create(req, res, next) {
        const brands = await Brand.findAll()
        const { name } = req.body
        const isCheckNewName = brands.filter((e) => e.name === name)
        if(isCheckNewName.length > 0) {
            return next(ApiError.badRequest('Name must be uniq'))
        }
        if(!name) {
            return next(ApiError.badRequest('Name is required field'))
        }
        const brand = await Brand.create({name})
        res.statusCode = 201
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async getOne(req, res, next) {
        const { id } = req.params
        const brand = await Brand.findOne({where: {id: id}})
        if(!brand) {
            return next(ApiError.notFound(`Brand with id: ${id} is not found`))
        }
        return res.json(brand)
    }


    async removeBrand(req, res, next) {
        const { id } = req.params
        const brand = await Brand.findOne({where: {id: id}})
        if(!brand) {
            return next(ApiError.notFound(`Brand with id: ${id} is not found`))
        }
        await Brand.destroy( {where: {id: id}})
        
        res.statusCode = 204
        return res.json({message: `Brand with id: ${id} has been successfully deleted`})
    }
}

module.exports = new BranfController()