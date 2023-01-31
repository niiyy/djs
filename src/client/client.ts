import { Client, Partials } from 'discord.js'
import { logger } from '../utils/logger'

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
