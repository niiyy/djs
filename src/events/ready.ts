import { IEvent } from '../types/client'

const handleReady: IEvent<'ready'> = client => {
  console.log(`client ready ${client.user.tag}`)
}

export default handleReady
