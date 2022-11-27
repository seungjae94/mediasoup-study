import WebSocket from "ws";

const WebsocketConnection = async (websocket: WebSocket.Server) => {
  websocket.on("connection", (ws: WebSocket) => {
    ws.on("message", (message: string) => {
      console.log("message: ", message);
      ws.send("hello world");
    });
  });
};

export { WebsocketConnection };
