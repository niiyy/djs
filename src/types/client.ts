import { Client } from 'discord.js'

export interface IEvent extends Record<string, any> {
  client: Client
}
