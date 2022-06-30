module.exports = {
  name: "zombies",
  catagory: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {

    const zombiesMaps = Array(
      "origins",
      "buried",
      "town",
      "tranzit",
      "die rise",
      "nuketown",
      "farm",
      "bus depot",
      "diner",
      "mob of the dead",
      "kino",
      "five",
      "dead ops arcade",
      "ascension",
      "call of the dead",
      "shangri-la",
      "moon",
      "nacht",
      "verruckt",
      "shi no numa",
      "der riese"
    );

    function random_map(zombiesMaps) {
      return zombiesMaps[
        Math.floor(Math.random() * zombiesMaps.length)
      ];
    }
      message.reply(random_map(zombiesMaps));
    } 
  };