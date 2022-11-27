import express from "express";
import http from "http";
import WebSocket from "ws";
import { WebsocketConnection } from "./lib/ws";

const main = async () => {
  const app = express();
  const server = http.createServer(app);
  const websocket = new WebSocket.Server({ server, path: "/ws" });

  WebsocketConnection(websocket);

  const port = 3000;

  server.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
};

export { main };
