import { REST } from '@discordjs/rest'
import {
  RESTPostAPIApplicationCommandsJSONBody,
  Routes,
} from 'discord-api-types/v10'

export const registerCommands = async (
  commands: RESTPostAPIApplicationCommandsJSONBody[]
): Promise<void> => {
  const rest = new REST({ version: '10' }).setToken(
    process.env.CLIENT_TOKEN as string
  )

  if (commands.length <= 0) {
    return
  }

  await rest.put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID as string,
      process.env.GUILD_ID as string
    ),
    {
      body: commands,
    }
  )
}
