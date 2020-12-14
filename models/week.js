const Matchup = require('./matchup.js');

class Week {
  constructor(weekNumber) {
    this.weekNumber = weekNumber;
    this.matchups = new Array();
  }

  setMatchup(homeTeam, awayTeam) {
    let matchup = new Matchup(homeTeam, awayTeam);
    this.matchups.push(matchup);
  }
}

module.exports = Week;