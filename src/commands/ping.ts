import { SlashCommandBuilder } from 'discord.js'

const pingCommand = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Je suis le plus beau !')
  .toJSON()

export default pingCommand
