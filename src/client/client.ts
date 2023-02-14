import { Client, Partials } from 'discord.js'
import { readdirSync } from 'fs'
import path from 'path'
import { logger } from '../utils/logger'
import { registerCommands } from './rest'

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
    this.commands()
  }

  private async events() {
    const eventsDir = readdirSync(path.resolve(__dirname, '../events'))

    for (const file of eventsDir) {
      const { default: execute } = await import(`../events/${file}`)
      const eventName = path.parse(file).name

      this.on(eventName, (...args) => execute(this, ...args))
    }
  }

  private async commands() {
    const commandsDir = readdirSync(path.resolve(__dirname, '../commands'))
    const commands = []

    for (const file of commandsDir) {
      const { default: command } = await import(`../commands/${file}`)
      commands.push(command)
    }

    registerCommands(commands)
  }

  public run() {
    this.login(process.env.CLIENT_TOKEN)
      .then(() => {
        logger.info(`Started with succes !`)
      })
      .catch(error => {
        logger.error(`error while trying to start the client ${error}`)
        process.exit(1)
      })
  }
}

export default Bot
