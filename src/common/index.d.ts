declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_TOKEN: string
      CLIENT_ID: string
      GUILD_ID: string
    }
  }
}

export {}
