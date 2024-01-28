import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.createMany([
      { fullName: 'user1', email: 'user1@example.com', password: 'password123' },
      { fullName: 'user2', email: 'user2@example.com', password: 'password123' },
    ])
  }
}
