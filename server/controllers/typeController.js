const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res, next) {
        const types = await Type.findAll()
        const { name } = req.body
        const isCheckNewName = types.filter((e) => e.name === name)
        if(isCheckNewName.length > 0) {
            return next(ApiError.badRequest('Name must be uniq'))
        }
        if(!name) {
            return next(ApiError.badRequest('Name is required field'))
        }
        const type = await Type.create({name})
        return res.json(type)
    }


    async getAll(req, res, next) {
        const types = await Type.findAll()
        return res.json(types)
    }


    async getOne(req, res, next) {
        const { id } = req.params
        const type = await Type.findOne({where: {id: id}})
        if(!type) {
            return next(ApiError.badRequest(`Type with id: ${id} is not found`))
        }
        return res.json(type)
    }


    async removeType(req, res, next) {
        const { id } = req.params
        const type = await Type.findOne({where: {id: id}})
        if(!type) {
            return next(ApiError.badRequest(`Type with id: ${id} is not found`))
        }
        await Type.destroy( {where: {id: id}})
        
        return res.json({message: `Type with id: ${id} has been successfully deleted`})
    }
}

module.exports = new TypeController()