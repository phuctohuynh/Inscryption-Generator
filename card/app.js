const eventName_select = document.getElementById("event");
const result_p = document.getElementById("result");
const generate_input = document.getElementById("generate");
const number_input = document.getElementById("numOfCards");

const allSigil = [
  "Trifurcated Strike",
  "Bifurcated Strike",
  "Mighty Leap",
  "Hefty",
  "Sprinter",
  "Touch of Death",
  "Unkillable",
  "Burrower",
  "Sharp Quills",
  "Guardian",
  "Many Lives",
  "Fledging",
  "Stinky",
  "Waterborne",
  "Worthy Sacrifice",
  "Hoarder",
  "Trinket Bearer",
  "Fecundity",
  "Dam Builder",
  "Loose Tail",
  "Rabbit Hole",
  "Bees Within",
  "Ant Spawner",
  "Morsel",
  "Corpse Eater",
  "Bone King",
  "Airborne",
  "Repulsive",
  "Brood Parasite",
  "Rampager",
  "Double Strike",
  "Blood Lust",
  "Armored",
  "Bone Digger",
  "Scavenger",
];
const allRare = [
  "Child 13",
  "Long Elk",
  "Mantis God",
  "Strange Larva",
  "Geck",
  "Ouroboros",
  "Mole Man",
  "Amalgam",
  "Pack Rat",
  "The Daus",
  "Urayuli",
  "Amoeba",
  "Ijiraq",
  "Pelt Lice",
];
const allBird = [
  "Kingfisher",
  "Raven Egg",
  "Sparrow",
  "Magpie",
  "Raven",
  "Turkey Vulture",
  "Cuckoo",
  "Lammergeier",
];
const allCanine = [
  "Wolf Cub",
  "Bloodhound",
  "Wolf",
  "Coyote",
  "Alpha",
  "Dire Wolf Cub",
  "Dire Wolf",
];
const allHooved = ["Black Goat", "Elk Fawn", "Elk", "Pronghorn", "Moose Buck"];
const allInsect = [
  "Beehive",
  "Mantis",
  "Ring Worm",
  "Worker Ant",
  "Ant Queen",
  "Cockroach",
  "Corpse Maggots",
  "Flying Ant",
  "Mealworm",
];
const allReptile = ["Bullfrog", "Skink", "Adder", "River Snapper", "Rattler"];
const allNoTribe = [
  "Amoeba",
  "Cat",
  "Card Tentacle",
  "Mirror Tentacle",
  "Mole",
  "Porcupine",
  "River Otter",
  "Skunk",
  "Stoat",
  "Warren",
  "Beaver",
  "Bell Tentacle",
  "Field Mice",
  "Rat King",
  "Great White",
  "Grizzly",
  "Opossum",
  "Bat",
  "Corrupted Card",
];
const allNormal = allBird.concat(
  allCanine,
  allHooved,
  allInsect,
  allReptile,
  allNoTribe
);
const allItem = [
  "Fan",
  "Frozen Opossum",
  "Black Goat",
  "Hourglass",
  "Piggy Bank",
  "Pliers",
  "Scissors",
  "Squirrel",
  "Boulder",
  "Wiseclock",
  "Magnifying Glass",
  "Magikal Bleach",
];

function randomizer(choicesTemp, noOfChoice) {
  let choices = [];
  for (let i = 0; i < noOfChoice; i++) {
    let choice = Math.floor(Math.random() * choicesTemp.length);
    console.log(choice);
    if (!choices.includes(choicesTemp[choice])) {
      result_p.innerHTML += choicesTemp[choice];
      result_p.innerHTML += " | ";
      choices[choices.length] = choicesTemp[choice];
    } else {
      i--;
    }
  }
}

function shower(choices) {
  for (let i = 0; i < choices.length; i++) {
    result_p.innerHTML += choices[i];
    result_p.innerHTML += " | ";
  }
}

function reset() {
  result_p.innerHTML = "";
}

generate_input.onclick = () => {
  reset();
  let eventName = eventName_select.value;
  switch (eventName) {
    case "normal":
      randomizer(allNormal, number_input.value);
      break;

    case "rare":
      randomizer(allRare, number_input.value);
      break;

    case "bird":
      randomizer(allBird, number_input.value);
      break;

    case "canine":
      randomizer(allCanine, number_input.value);
      break;

    case "hooved":
      randomizer(allHooved, number_input.value);
      break;

    case "insect":
      randomizer(allInsect, number_input.value);
      break;

    case "reptile":
      randomizer(allReptile, number_input.value);
      break;

    case "sigil":
      randomizer(allSigil, number_input.value);
      break;

    case "item":
      randomizer(allItem, number_input.value);
      break;

    case "chance":
      let randomChance = Math.random();
      if (randomChance < number_input.value / 100) {
        shower(["True"]);
      } else {
        shower(["False"]);
      }
      break;
  }
};
