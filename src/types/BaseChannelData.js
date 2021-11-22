const { TextBasedChannelTypes, VoiceBasedChannelTypes, ThreadChannelTypes } = require('discord.js')
const { ChannelPermissionsData } = require('./')

module.exports = class BaseChannelData {
	constructor({
		type = TextBasedChannelTypes | VoiceBasedChannelTypes | ThreadChannelTypes,
		name = String,
		parent = String | null,
		permissions = ChannelPermissionsData
	})
}