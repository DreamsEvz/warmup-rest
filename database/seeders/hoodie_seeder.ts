import Hoodie from '#models/hoodie'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class HoodieSeeder extends BaseSeeder {
  async run() {
    await Hoodie.createMany([
      { name: 'hoodie1', price: 100, size: 'M', color: 'black', brand: 'brand1' },
      { name: 'hoodie2', price: 200, size: 'L', color: 'white', brand: 'brand2' },
    ])
  }
}
