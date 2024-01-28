import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import User from '#models/user'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Hoodie extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare price: number

  @column()
  declare size: string

  @column()
  declare color: string

  @column()
  declare brand: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @manyToMany(() => User)
  declare users: relations.ManyToMany<typeof User>
}
