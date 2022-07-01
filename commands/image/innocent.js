module.exports = {
  name: "innocent",
  catagory: "image",
  permissions: [],
  devOnly: true,
  run: async ({ client, message, args }) => {
    message.channel.send({ files: [`media/chief/innocent.jpg`], content: "Chief is Innocent :100:"});
  },
};
