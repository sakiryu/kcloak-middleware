import 'dotenv/config'
import express from 'express';

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.listen(process.env.PORT, console.log(`Initialized on port ${process.env.PORT}`));
export default server;
