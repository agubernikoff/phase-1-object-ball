function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: "Black,White",
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise,Purple",
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brenden Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
let game = gameObject();

function numPointsScored(playersName) {
  if (playersName in game["home"]["players"]) {
    for (let hoopers in game["home"]["players"]) {
      return game["home"]["players"][playersName]["points"];
    }
  } else {
    for (let hoopers in game["away"]["players"]) {
      return game["away"]["players"][playersName]["points"];
    }
  }
}

console.log(
  "Haywood scored: " + numPointsScored("Brenden Haywood") + " points"
);
console.log("Anderson scored: " + numPointsScored("Alan Anderson") + " points");

function shoeSize(playersName) {
  if (playersName in game["home"]["players"]) {
    for (let hoopers in game["home"]["players"]) {
      return game["home"]["players"][playersName]["shoe"];
    }
  } else {
    for (let hoopers in game["away"]["players"]) {
      return game["away"]["players"][playersName]["shoe"];
    }
  }
}
console.log("Haywood wears a size " + shoeSize("Brenden Haywood") + " shoe");
console.log("Anderson wears a size " + shoeSize("Alan Anderson") + " shoe");

function teamColors(teamName) {
  if (teamName === game["home"]) {
    return game["home"]["colors"].split(" ");
  } else {
    return game["away"]["colors"].split(" ");
  }
}
console.log("Brooklyn's colors are " + teamColors("Brooklyn Nets"));
console.log(teamColors("Brooklyn Nets"));
console.log("Charlotte's colors are " + teamColors("Charlotte Hornets"));
console.log(teamColors("Charlotte Hornets"));

function teamNames() {
  const arrOfTeamNames = [];
  arrOfTeamNames.push(game["home"]["teamName"]);
  arrOfTeamNames.push(game["away"]["teamName"]);
  return arrOfTeamNames;
}
console.log("an array of team names: " + teamNames());

function playerNumbers(teamName) {
  const arrOfNumbers = [];
  if (teamName === game["home"]["teamName"]) {
    for (const key in game["home"]["players"])
      arrOfNumbers.push(game["home"]["players"][key]["number"]);
  } else {
    for (const key in game["away"]["players"]) {
      arrOfNumbers.push(game["away"]["players"][key]["number"]);
    }
  }
  return arrOfNumbers;
}
console.log("The Nets numbers are: " + playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Brooklyn Nets"));
console.log("The Hornets numbers are: " + playerNumbers("Charlotte Hornets"));
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playersName) {
  if (playersName in game["home"]["players"]) {
    return game["home"]["players"][playersName];
  } else {
    return game["away"]["players"][playersName];
  }
}
console.log(playerStats("Brook Lopez"));
console.log(playerStats("Ben Gordon"));

function bigShoeRebounds() {
  let rebounds = 0;
  let shoeSize = 0;
  for (hooper in game["home"]["players"]) {
    if (game["home"]["players"][hooper]["shoe"] > shoeSize) {
      shoeSize = game["home"]["players"][hooper]["shoe"];
      rebounds = game["home"]["players"][hooper]["rebounds"];
    }
  }
  for (hooper in game["away"]["players"]) {
    if (game["away"]["players"][hooper]["shoe"] > shoeSize) {
      shoeSize = game["away"]["players"][hooper]["shoe"];
      rebounds = game["away"]["players"][hooper]["rebounds"];
    }
  }
  return rebounds;
}
console.log(
  "The player with the largest shoe size had " + bigShoeRebounds() + "rebounds"
);
