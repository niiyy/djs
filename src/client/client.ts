import { Client, Partials } from 'discord.js'
import { readdirSync } from 'fs'
import path from 'path'
import { logger } from '../utils/logger'
import { removeFileExtension } from '../utils/misc'

class Bot extends Client {
  constructor() {
    super({
      intents: 3276799,
      partials: [
        Partials.User,
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
      ],
    })

    this.events()
  }

  private async events() {
    const eventsDir = readdirSync(path.resolve(__dirname, '../events'))

    for (const file of eventsDir) {
      const { default: execute } = await import(`../events/${file}`)
      const eventName = removeFileExtension(file)
      this.on(eventName, (...args) => execute({ ...args, client: this }))
    }
  }

  public run() {
    this.login(process.env.CLIENT_TOKEN)
      .then(() => {
        logger.info(`Started with succes !`)
      })
      .catch(() => {
        logger.error('error while trying to start the client')
        process.exit(1)
      })
  }
}

export default Bot
