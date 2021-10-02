const team = {
    _players: [
      {firsName: 'Steph', lastName: 'Curry', age: 32},
      {firsName: 'Kevin', lastName: 'Durant', age: 31},
      {firsName: 'Klay', lastName: 'Thompson', age: 30}
    ],
    _games: [
      {opponents: 'Cavs', teamPoints: 79, opponentsPoints: 76},
      {opponents: 'Blazers', teamPoints: 99, opponentsPoints: 86},
      {opponents: 'Raptors', teamPoints: 79, opponentsPoints: 82}
    ],
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games
    },
  
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(oppName, points, oppPoints){
      const game = {
        opponents: oppName,
        points: points,
        opponentsPoints: oppPoints
      }
      this.games.push(game)
    }
  };
    team.addPlayer("Steph", 'Curry', 32);
    team.addPlayer('Kevin', 'Durant', 31);
    team.addPlayer('Klay', 'Thompson', 30);
  
    team.addGame('Mavs', 85, 63);
    team.addGame('Rockets', 105, 93);
    team.addGame('Hea', 85, 63);
  
    //console.log(team.players)
  console.log(team.games)
  