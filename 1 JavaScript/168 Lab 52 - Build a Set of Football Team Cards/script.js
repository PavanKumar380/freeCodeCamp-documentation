const footballTeam = {
  team: "Blue Lock",
  year: 2018,
  headCoach: "Ego Jinpachi",
  players: [
    {
      name: "Yoichi Isagi",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Gin Gagamaru",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Ikki Niko",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Jyubei Aryu",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Meguru Bachira",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Hyoma Chigiri",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Tabito Karasu",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Seishiro Nagi",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Kenyu Yukimiya",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Eita Otoya",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Rin Itoshi",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Aoshi Tokimitsu",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Gurimu Igarashi",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Jin Kiyora",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Jingo Raichi",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Nijiro Nanase",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Ranze Kurona",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Reiji Hiiragi",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Reo Mikage",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Shoei Baro",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Yo Hiori",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Yukio Ishikari",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Zantetsu Tsurugi",
      position: "forward",
      isCaptain: false
    }
  ]
}

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

const playArr = footballTeam.players;

const selectPlayers = document.getElementById("players");
const playerContainer = document.getElementById("player-cards");

function playerCards(playerCat) {
  const play =
    playerCat === "all"
      ? playArr
      : playArr.filter(
        ({position}) => position === playerCat
      );
  return play.map(
    ({name, position, isCaptain}) => {
      return isCaptain ? `
          <div class="player-card">
            <h2>(Captain) ${name}</h2>
            <p>Position: ${position}</p>
          </div>
        ` : `
          <div class="player-card">
            <h2>${name}</h2>
            <p>Position: ${position}</p>
          </div>
        `;
    }
  ).join("");
}

playerContainer.innerHTML = playerCards("all");

selectPlayers.addEventListener("change", () => {
  playerContainer.innerHTML = playerCards(selectPlayers.value);
});