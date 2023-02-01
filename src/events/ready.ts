import { IEvent } from '../types/client'

const handleReady = ({ client }: IEvent) => {
  console.log(`client ready ${client.user.tag}`)
}

export default handleReady
