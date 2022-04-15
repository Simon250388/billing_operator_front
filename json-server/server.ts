import * as jsonServer from "json-server";
import { data } from './data'

const server = jsonServer.create();
const router = jsonServer.router(data());
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/accounting-point/:id": "/accounting-point?keyRoomId=:id"
  })
);

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});