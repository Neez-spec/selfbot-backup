const { DefaultMessageNotificationLevel, ExplicitContentFilterLevel, Snowflake, VerificationLevel } = require('discord.js');

const { AfkData, BanData, ChannelsData, EmojiData, RoleData, WidgetData } = require('./');

module.exports = class BackupData {
	constructor({
		name = String,
		iconURL = String,
		iconBase64 = String,
		verificationLevel = VerificationLevel,
		explicitContentFilter = ExplicitContentFilterLevel,
		defaultMessageNotifications = DefaultMessageNotificationLevel | Number,
		afk = AfkData,
		widget = WidgetData,
		splashURL = String,
		splashBase64 = String,
		bannerURL = String,
		bannerBase64 = String,
		channels = ChannelsData,
		roles = RoleData,
		bans = BanData,
		emojis = EmojiData,
		createdTimestamp = Number,
		guildID = String,
		id = Snowflake
	})
}