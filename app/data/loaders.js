import getRethink from '../database/rethinkDriver'


const getTeamPlayersUsingTeamId = async (teamIds) => {
  const r = getRethink()
  return await r.map(teamIds, (id) => {
    return r.table('Team').get(id)('players').map((playerId) => {
      return r.table('Player').get(playerId)
    })
  })
}
export {
  getTeamPlayersUsingTeamId
}