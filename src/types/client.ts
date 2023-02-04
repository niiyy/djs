import { Client, ClientEvents } from 'discord.js'

export type IClientReady = Client<true>

export type IEvent<T extends keyof ClientEvents> = (
  client: IClientReady,
  ...args: ClientEvents[T]
) => void
