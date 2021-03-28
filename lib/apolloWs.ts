import { WebSocketLink } from "@apollo/client/link/ws";

const apolloWs:WebSocketLink = new WebSocketLink({
  uri: `wss://hasura.physiothrive.com/`,
  options: {
    reconnect: true,
  },
});

export default apolloWs;
