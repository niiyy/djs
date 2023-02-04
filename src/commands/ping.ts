import { SlashCommandBuilder } from 'discord.js'

const pingCommand = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Commande de ping !')
  .toJSON()

export default pingCommand
