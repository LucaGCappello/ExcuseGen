/* eslint-disable */
import "./index.html";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuses").innerHTML = genExcuse();
  console.log("Hello Rigo from the console!");
};

let genExcuse = () => {
  let pronoun = ["A ", "The "];
  let subject = [
    "cyclist ",
    "squirrel ",
    "cat ",
    "magician ",
    "teacher ",
    "neighbor ",
    "alien ",
    "cow ",
    "pirate ",
    "ghost ",
    "superhero ",
    "chef ",
    "vampire ",
    "robot ",
    "athlete "
  ];
  let action = [
    "ate my ",
    "hid my ",
    "painted my ",
    "washed my ",
    "borrowed my ",
    "destroyed my ",
    "teleported my ",
    "flew away with my ",
    "cursed my ",
    "transformed into my ",
    "pranked my ",
    "summoned my ",
    "buried my ",
    "telekinesis on my ",
    "sang to my "
  ];
  let possetion = [
    "keys ",
    "laptop ",
    "umbrella ",
    "guitar ",
    "lunchbox ",
    "glasses ",
    "wallet ",
    "passport ",
    "coffee mug ",
    "skateboard ",
    "diary ",
    "camera ",
    "scarf ",
    "watch ",
    "snack "
  ];
  let where = [
    "on the roof.",
    "at the beach.",
    "in the forest.",
    "at the movie theater.",
    "at the gym.",
    "under the bed.",
    "at the library.",
    "on a rollercoaster.",
    "in the mountains.",
    "at the zoo.",
    "in the swimming pool.",
    "at the concert.",
    "in the spaceship.",
    "at the amusement park.",
    "in the parallel universe."
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    subject[subjectIndex] +
    action[actionIndex] +
    possetion[possessionIndex] +
    where[whereIndex]
  );
};
