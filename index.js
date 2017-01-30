const getRethink = require('./app/database/rethinkDriver')
const r = getRethink.default();
require('./app/database/init').up(r)
  .then(
    require('./app/server')
  )
