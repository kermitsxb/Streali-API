import { DateTime } from 'luxon'
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import ChatTheme from 'App/Models/ChatTheme'

export default class User extends BaseModel {
	@column({ isPrimary: true })
	public id: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@column()
	public username: string

	@column()
	public email: string

	@column()
	public avatarUrl: string

	@column({ serializeAs: null })
	public oauthProviderId: string

	@column({ serializeAs: null })
	public oauthProviderName: string

	@hasMany(() => ChatTheme)
	public chatThemes: HasMany<typeof ChatTheme>
}
