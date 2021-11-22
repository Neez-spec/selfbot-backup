# selfbot-backup

**Note**: This package is basically a copy of [Androz2091](https://github.com/Androz2091) discord-backup that I converted over from ts to js for my own use (selfbot in discord.js v13) all credits for code go to him.

This code allows the user to easially manage discord server backups

* Takes less then 10 seconds
* Restores messages  with webhooks
* Restores everything that is possable to restore (channes, roles, permissions, bans, emojis, name, icon, etc..)

## Installation
```js
npm i selfbot-backup
```

## Examples
You can see an example bot on Androz's github: [backups-bot](https://github.com/Androz2091/backups-bot)

### Create

Create a backup for a guild / server

```js
const backup = require('selfbot-backup');

backup.create(Guild, options).then(data => {
	console.log(data.id) // GY3FS
});
```

click [here](#create-advanced) to learn about the backup options

### Load

Load the guild from the backup

```js
const backup = require('selfbot-backup');

backup.load(backupID, Guild).then(() => {
	backup.remove(backupID) // If you want you can delete the backup     data after you have used it
})
```

## Advanced usage

### Create [advanced]

You can use options for backup creation

```js
const backup = require('selfbot-backup');

backup.create(Guild, {
	maxMessagesPerChannel: 10,
	jsonSave: false,
	jsonBeautify: false,
	doNotBackup: ['roles', 'channels', 'bans'],
	saveImages: 'base64'
})
```

## Restored things

Here are all the things that can be restored by `selfbot-backup`:

* Server icon
* Server banner
* Server region
* Server splash
* Server verification level
* Server explicit content filter
* Server default message notifications
* Server embed channel
* Server bans (with reasons)
* Server emojis
* Server AFK (channel and timeout)
* Server channels (with permissions, type, nsfw, messages, etc...)
* Server roles (with permissions, color, etc...)