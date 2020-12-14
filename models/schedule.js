const Week = require('./week.js');

class Schedule {
  static _weeks = new Array();
  static test = 1;

  constructor() {
    this._weeks = new Array();
  }

  static setWeek(weekNumber, matchups) {
    let week = new Week(weekNumber);
    for (let matchup of matchups) {
      week.setMatchup(matchup[0], matchup[1])
    }
    this._weeks.push(week);
  }

  static getWeeks() {
    return this._weeks;
  }
}

module.exports = Schedule;