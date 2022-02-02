const eventName_select = document.getElementById("event");
const result_p = document.getElementById("result");
const generate_input = document.getElementById("generate");
const pricey_input = document.getElementById("ch-priceypelts");
let getChance;

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

function getRandomCard(type, number_input) {
  let eventName = type;
  switch (eventName) {
    case "normal":
      randomizer(allNormal, number_input);
      break;

    case "rare":
      randomizer(allRare, number_input);
      break;

    case "bird":
      randomizer(allBird, number_input);
      break;

    case "canine":
      randomizer(allCanine, number_input);
      break;

    case "hooved":
      randomizer(allHooved, number_input);
      break;

    case "insect":
      randomizer(allInsect, number_input);
      break;

    case "reptile":
      randomizer(allReptile, number_input);
      break;

    case "sigil":
      randomizer(allSigil, number_input);
      break;

    case "item":
      randomizer(allItem, number_input);
      break;

    case "chance":
      let randomChance = Math.random();
      if (randomChance < number_input / 100) {
        getChance = true;
      } else {
        getChance = false;
      }
      break;
  }
}

generate_input.onclick = () => {
  reset();
  let eventName = eventName_select.value;
  console.log(eventName);
  let choices = [];
  switch (eventName) {
    case "boulder":
      getRandomCard("chance", 33.3);
      if (getChance) {
        shower(["Golden Pelt"]);
      } else {
        shower(["This cannot be Ring Worm"]);
        getRandomCard("insect", 1);
        getRandomCard("sigil", 1);
      }
      break;

    case "cost":
      shower([
        "Get random cost, then use Random Card until you get that cost.",
      ]);
      randomizer(["1 Blood", "2 Blood", "3 Blood", "Bones"], 3);
      break;

    case "random":
      getRandomCard("normal", 3);
      break;

    case "trapper":
      let choicesNormal = [
        "Rabbit Pelt - 2",
        "Wolf Pelt - 4/5/9",
        "Golden Pelt - 7/9/10",
        "Trapper's Knife - 7",
      ];
      shower(choicesNormal);
      break;

    case "trial":
      randomizer(
        ["5 Bones", "4 Blood", "4 Power", "6 Health", "3 Sigils", "2 Kin"],
        3
      );
      getRandomCard("normal", 1);
      getRandomCard("sigil", 2);
      getRandomCard("normal", 1);
      getRandomCard("sigil", 2);
      getRandomCard("normal", 1);
      getRandomCard("sigil", 2);
      break;

    case "tribe":
      randomizer(["Bird", "Canine", "Hooved", "Insect", "Reptile"], 3);
      break;

    case "rare":
      getRandomCard("rare", 3);
      break;

    case "altar":
      shower(["No need for this"]);
      break;

    case "backpack":
      getRandomCard("item", 3);
      break;

    case "campfire":
      randomizer(["+1 Attack", "+2 Health"], 1);
      getRandomCard("chance", 50);
      if (getChance) {
        shower(["Also get killed if use 2nd time."]);
      }
      break;

    case "copy":
      randomizer(
        [
          "Change sigil",
          "+1 Attack",
          "-1 Attack",
          "+2 Health",
          "-2 Health",
          "No changes",
        ],
        1
      );
      break;

    case "mycologist":
      shower(["No need for this"]);
      break;

    case "remove":
      shower(["No need for this"]);
      break;

    case "totem":
      getRandomCard("sigil", 2);
      randomizer(["Bird", "Canine", "Hooved", "Insect", "Reptile"], 1);
      break;

    case "trade":
      getRandomCard("normal", 8);
      result_p.innerHTML += `</p><p>`;
      getRandomCard("normal", 8);
      result_p.innerHTML += `</p><p>`;
      getRandomCard("sigil", 8);
      result_p.innerHTML += `</p><p>`;
      getRandomCard("rare", 4);
      result_p.innerHTML += `</p><p>`;
      break;
  }
};
