const port = 9000;
const secretKey = 'a4f8071f-b873-4447-8ee2';
const expiredAfter = 60 * 60 * 1000;

export default {
  port,
  socketport:4000,
  newsSocketport:4001,
  secretKey,
  expiredAfter,
  database: "mongodb://localhost:27017/UCIP"
};
