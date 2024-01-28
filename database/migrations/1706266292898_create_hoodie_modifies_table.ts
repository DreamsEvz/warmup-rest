import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'hoodie_modifies'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('brand').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
