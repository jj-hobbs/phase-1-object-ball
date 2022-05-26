const game = gameObject();
const players = playersObject();
const teams = Object.values(game);

function gameObject() {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1, 
                    slamdunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamdunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19, 
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamdunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15, 
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamdunks: 1,
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ['turquoise', 'purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7, 
                    slamdunks: 2,
                },
                "Bismak Biyomdo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamdunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12, 
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamdunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamdunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15, 
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamdunks: 12,
                },
            },
        },
    }
    return obj
}

function numPointsScored(playerName) {
    // for (let gameKey in game) {
    //   let teamObj = game[gameKey];
    //   for (let teamKey in teamObj) {
    //     if (teamKey == "players") {
    //       let players = teamObj[teamKey];
    //       for (let player in players) {
    //         // debugger
    //         if (player == playerName) {
    //           return players[player].points;
    //         }
    //       }
    //     }
    //   }
    // }
    return players[playerName].points
  }

function homeTeam() {
    let object = gameObject()
    return object['home']['teamName']
  }

  function awayTeam(() {
    let object = gameObject()
    return object['away']['teamName']
  }

  function playersObject() {
    // return Object.assign({}, homeTeam().players, awayTeam().players)
    return {...homeTeam().players, ...awayTeam().players}
  }
  
  function teamColors(teamName){
    return findByTeamName(teamName).colors
  }
  
  function findByTeamName(teamName){
    return teams.find(team => team.teamName === teamName)
  }
  
  function teamNames() {
    return teams.map(team => team.teamName)
  }
   
  function shoeSizes() {
    let stats = Object.values(players)
    return stats.map(stat => stat.shoe)
  }
   
  function bigFeetPlayers() {
    const playerArr = Object.entries(players)
    debugger
    return playerArr.filter(player => player[1].shoe > 15).map(pArr => pArr[0])
  }