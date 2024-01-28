import { BaseSchema } from '@adonisjs/lucid/schema'

export default class UserHoodieSchema extends BaseSchema {
  protected tableName = 'hoodie_user'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('hoodie_id').unsigned().references('id').inTable('hoodies').onDelete('CASCADE')
      table.primary(['user_id', 'hoodie_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
