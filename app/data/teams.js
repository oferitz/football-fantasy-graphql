import getRethink from '../database/rethinkDriver'

const getAllTeams = async () => {
  console.log('DB HIT')
  return await getRethink().table('Team')
}

const getTeam = async (teamId) => {
  console.log(`DB HIT - getTeam ${teamId}`)
  return await getRethink()
    .table('Team')
    .get(parseInt(teamId, 10))
}

const newTeam = async (team) => {
  const _team = Object.assign(team, {teamId: Math.floor(Math.random() * 2000) + 100})
  const result = await getRethink()
    .table('Team')
    .insert(_team, {returnChanges: true})
  return result.changes[0].new_val
}

export {
  getTeam,
  getAllTeams,
  newTeam
}

