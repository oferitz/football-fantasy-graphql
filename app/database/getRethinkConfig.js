import url from 'url';

export const getRethinkConfig = () => {
  const urlString = process.env.RETHINKDB_URL || 'rethinkdb://localhost:48015/footballFantasy';
  const u = url.parse(urlString);

  return {
    host: u.hostname,
    port: parseInt(u.port, 10),
    db: u.path.split('/')[1],
    min: process.env.NODE_ENV === 'production' ? 50 : 3,
    buffer: process.env.NODE_ENV === 'production' ? 50 : 3
  }
}