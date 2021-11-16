const { TextBasedChannelTypes, VoiceBasedChannelTypes, ThreadChannelTypes } = require('discord.js')
const { ChannelPermissionsData } = require('./')

module.exports = BaseChannelData = {
	type: TextBasedChannelTypes | VoiceBasedChannelTypes | ThreadChannelTypes;
	name: String;
	parent?: String;
	permissions: ChannelPermissionsData[];
}