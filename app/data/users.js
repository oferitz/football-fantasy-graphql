import getRethink from '../database/rethinkDriver'

const getAllUsers = async () => {
  console.log('DB HIT')
  return await getRethink().table('User')
}
const getUser = async (userId) => {
  console.log(`DB HIT - getUser ${userId}`)
  return await getRethink()
    .table('User')
    .get(parseInt(userId, 10))
}

export {
  getUser,
  getAllUsers
}
