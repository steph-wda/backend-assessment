let studyCards =[]
let id = 1;


module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "It’s not the amount of time you devote, but what you devote to the time that counts.",
      "It’s time to get moving. Your spirits will lift accordingly.",
      "Living with a commitment to excellence shall take you far.",
      "Nature, time and patience are the three great physicians.",
      "Observe all men, but most of all yourself.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
};
