const { MessageEmbed, FileOptions } = require('discord.js')

module.exports = class MessageData {
	constructor({
		username = String,
		avatar = String,
		content = String,
		embeds = MessageEmbed,
		files = FileOptions,
		pinned = Boolean
	})
}