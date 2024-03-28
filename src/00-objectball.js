function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 22,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 7,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  console.log(gameObject());

  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  console.log(homeTeamName());
  // logs "Brooklyn Nets"

  function mostPointsScored(game) {
    let maxPoints = 0;
    let playerName = "";
    Object.keys(game).forEach(team => {
      Object.keys(game[team].players).forEach(player => {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          playerName = player;
        }
      });
    });
    return playerName;
  }
  
  function winningTeam(game) {
    let homePoints = 0;
    let awayPoints = 0;
    Object.keys(game.home.players).forEach(player => {
      homePoints += game.home.players[player].points;
    });
    Object.keys(game.away.players).forEach(player => {
      awayPoints += game.away.players[player].points;
    });
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName(game) {
    let longestName = "";
    Object.keys(game).forEach(team => {
      Object.keys(game[team].players).forEach(player => {
        if (player.length > longestName.length) {
          longestName = player;
        }
      });
    });
    return longestName;
  }
  
  const game = gameObject();
  console.log("Player with the most points:", mostPointsScored(game));
  console.log("Winning team:", winningTeam(game));
  console.log("Player with the longest name:", playerWithLongestName(game));