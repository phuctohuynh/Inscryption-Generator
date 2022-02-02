const nodes = document.getElementById("numOfNodes");
const mapNumber = document.getElementById("mapNumber");
const generate_input = document.getElementById("generate");
const map_div = document.getElementById("map");
const totemBattle_input = document.getElementById("ch-totembattle");

let battle = ["normal", "totem"];
const boss = ["angler", "prospector", "trapper"];
const card = ["boulder", "cost", "random", "trapper", "trial", "tribe"];
const util = [
  "alter",
  "backpack",
  "campfire",
  "copy",
  "mycologist",
  "remove",
  "totem",
  "trade",
];

function iconGen(eventType, eventArray, maxIcons) {
  let numOfIcons = Math.floor(Math.random() * maxIcons) + 1;
  let mapNo = mapNumber.value;
  for (let i = 0; i < numOfIcons; i++) {
    let randomIcon = Math.floor(Math.random() * eventArray.length);
    if (
      mapNo == 1 &&
      (eventArray[randomIcon] == "remove" ||
        eventArray[randomIcon] == "copy" ||
        eventArray[randomIcon] == "mycologist")
    ) {
      i--;
    } else {
      map_div.innerHTML += `
            <img src="mapicons/${eventType}_${eventArray[randomIcon]}.png">
        `;
    }
  }

  map_div.innerHTML += `<br>`;
}

function resetMap() {
  map_div.innerHTML = ``;
}

generate_input.onclick = () => {
  resetMap();
  let numOfNodes = nodes.value;
  let mapNo = mapNumber.value;
  if (mapNo != 4) {
    if (numOfNodes == 1) {
      alert("Please enter a number larger than 1.");
    } else {
      let isTotem = totemBattle_input.checked;
      if (isTotem) {
        battle[0] = "totem";
      } else {
        battle[0] = "normal";
      }
      // Boss nodes
      iconGen("boss", boss, 1);
      iconGen("util", util, 2);
      iconGen("util", util, 3);
      iconGen("card", card, 3);

      // Normal nodes
      for (let i = 0; i < numOfNodes - 1; i++) {
        iconGen("battle", battle, 2);
        iconGen("util", util, 3);
        iconGen("card", card, 3);
      }
    }
  } else {
    console.log("Something went wrong");
  }
};
