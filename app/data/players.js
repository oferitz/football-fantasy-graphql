import getRethink from '../database/rethinkDriver'

const getAllPlayers = async () => {
  console.log('DB HIT')
  return await getRethink().table('Player')
}
const getPlayer = async (playerId) => {
  console.log(`DB HIT - getPlayer ${playerId}`)
  return await getRethink()
    .table('Player')
    .get(parseInt(playerId, 10))
}

export {
  getPlayer,
  getAllPlayers
}
