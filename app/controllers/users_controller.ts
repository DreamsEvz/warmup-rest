import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Hoodie from '#models/hoodie'

export default class UsersController {
  async index({ response }: HttpContext) {
    const users = await User.all()
    return response.json({
      users: users,
    })
  }

  async store({ request, response }: HttpContext) {
    const userData = request.only(['full_name', 'email', 'password'])
    const user = await User.create(userData)
    return response.created(user)
  }

  async delete({ request, response }: HttpContext) {
    const { id } = request.params()
    const user = await User.findOrFail(id)
    await user.delete()
    return response.ok({
      message: 'user deleted',
    })
  }

  async update({ request, response }: HttpContext) {
    const { id } = request.params()
    const userData = request.only(['full_name', 'email', 'password'])
    const user = await User.findOrFail(id)
    user.merge(userData)
    await user.save()
    return response.ok({
      message: 'user updated',
    })
  }

  async order({ request, response }: HttpContext) {
    const { userId, hoodieId } = request.params()

    const user = await User.findOrFail(userId)
    const hoodie = await Hoodie.findOrFail(hoodieId)

    const existingHoodie = await user.related('hoodies').query().where('id', hoodie.id).first()

    if (!existingHoodie) {
      await user.related('hoodies').attach([hoodie.id])
      return response.ok({
        message: 'user order',
      })
    }

    return response.conflict({
      message: 'user already ordered this hoodie',
    })
  }
}
