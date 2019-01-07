module.exports = {
  database: '"mongodb://localhost:27017/UCIP',
  server: {
    port: 8888,
    host: 'localhost',
  },
  jwt: {
    secret: 'a4f8071f-b873-4447-8ee2',
    expiresIn: '1d',
  },
};
