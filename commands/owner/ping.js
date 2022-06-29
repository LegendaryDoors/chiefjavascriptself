module.exports = {
  name: "ping",
  catagory: "owner",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.reply(
      `My Latency is ${
        Date.now() - message.createdTimestamp
      }ms. API Latency is ${Math.round(client.ws.ping)}ms.`
    );
  },
};
