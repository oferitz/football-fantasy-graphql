import users from './seed/users'
import teams from './seed/teams'
import players from './seed/players'

exports.up = async (r) => {

  const dbExists = await r.dbList().contains('footballFantasy')
  if(dbExists) {
    return Promise.resolve(true)
  }
  const initialTables = [
    r.tableCreate('User', {primaryKey: 'userId'}),
    r.tableCreate('Team', {primaryKey: 'teamId'}),
    r.tableCreate('Player', {primaryKey: 'playerId'})
  ]
  await Promise.all(initialTables)

  const seedData = [
    r.table('User').insert(users),
    r.table('Team').insert(teams),
    r.table('Player').insert(players),
  ]
  return await Promise.all(seedData)
}

exports.down = async (r) => {
  const initialTables = [
    r.tableDrop('User'),
    r.tableDrop('Team'),
    r.tableDrop('Player'),
  ]
  return await Promise.all(initialTables)


};