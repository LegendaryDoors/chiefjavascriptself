module.exports = {
  name: "hiddenhelp",
  catagory: "owner",
  permissions: [],
  devOnly: true,
  run: async ({ client, message, args }) => {
    message.reply("My commands:\n!svr !ping !help");
  },
};
