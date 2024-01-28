import { HttpContext } from '@adonisjs/core/http'
import Hoodie from '#models/hoodie'

export default class HoodiesController {
  async index({ response }: HttpContext) {
    const hoodies = await Hoodie.all()
    return response.json({
      hoodies: hoodies,
    })
  }

  async store({ request, response }: HttpContext) {
    const hoodieData = request.only(['name', 'price', 'size', 'color', 'brand'])
    const hoodie = await Hoodie.create(hoodieData)
    return response.created(hoodie)
  }

  async delete({ request, response }: HttpContext) {
    const { id } = request.params()
    const hoodie = await Hoodie.findOrFail(id)
    await hoodie.delete()
    return response.ok({
      message: 'hoodie deleted',
    })
  }

  async update({ request, response }: HttpContext) {
    const { id } = request.params()
    const hoodieData = request.only(['name', 'price', 'size', 'color', 'brand'])
    const hoodie = await Hoodie.findOrFail(id)
    hoodie.merge(hoodieData)
    await hoodie.save()
    return response.ok({
      message: 'hoodie updated',
    })
  }
}
