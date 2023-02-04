import { ClientEvents } from 'discord.js'
import { IClientReady, IEvent } from '../types/client'

const handleMessageCreate: IEvent<'messageCreate'> = (client, message) => {
  console.log(message.id)
}

export default handleMessageCreate
