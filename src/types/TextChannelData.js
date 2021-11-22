const { BaseChannelData, MessageData, ThreadChannelData } = require('./')

module.exports = class TextChannelData extends BaseChannelData {
	constructor({
		nsfw = Boolean,
		parent = String,
		topic = String,
		rateLimitPerUser = Number,
		isNews = Boolean,
		messages = MessageData,
		threads = ThreadChannelData
	})
}