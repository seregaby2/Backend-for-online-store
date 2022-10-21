const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info} = req.body
            
            const {img} = req.files
            
            let fileName= uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!name) {
                return next(ApiError.badRequest("Please, enter device's name"))
            }
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            if(info) {
                info = JSON.parse(info)
                info.forEach(e => {
                    DeviceInfo.create({
                        title: e.title,
                        description: e.description,
                        deviceId: device.id
                    })
                });
            }
            res.statusCode = 201
            return res.json(device)
        }
        catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1;
        limit = limit || 9;
        console.log(page, limit)
        let offset = page * limit - limit
        let devices
        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if(brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)

    }

    async getOne(req, res, next) {
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        })
        if(!device) {
            return next(ApiError.badRequest(`Device with id: ${id} is not found`))
        }
        return res.json(device)
    }

    async delete(req, res, next) {
        const {id} = req. params
        const device = await Device.findOne({where: {id}})
        if(!device) {
            return next(ApiError.badRequest(`Device with id: ${id} is not found`))
        }
         await Device.destroy({where:{id}})
         res.statusCode = 201
         return res.json({message: `Device with id: ${id} has been successfully deleted`})
    }
}

module.exports = new DeviceController()