// Select title element
const twitchOverlayTitle = document.querySelector('.twitch-overlay__title')

const client = new tmi.Client({
  // Channel name to connect
	channels: ['dontcallmechris']
})

client.connect()

client.on('message', (tags, message, self) => {
  if (self) return

  // Badges: broadcaster, moderator, vip
  const broadcaster = tags.badges.broadcaster
  const moderator = tags.badges.moderator

  // Choose who can use the command
	if (broadcaster || moderator && message.startsWith('!')) {
    const [command, ...arguments] = message.split(' ')

    if (command === '!betinfo') {
      const title = arguments.join(' ')

      twitchOverlayTitle.textContent = title
    }
  }
})