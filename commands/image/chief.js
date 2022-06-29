module.exports = {
  name: "chief",
  catagory: "image",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const num = (Math.floor(Math.random() * 5) + 1).toString();
    message.reply({ files: [`media/chief/chief${num}.png`] });
  },
};
