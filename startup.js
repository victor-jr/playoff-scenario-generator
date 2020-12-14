const Database = require("./database.js");
const Team = require("./models/team.js");
const Matchup = require("./models/matchup.js");
const Schedule = require("./models/schedule.js");

class StartUp {
  static init() {
    if (Database.db == undefined) {
      Database.init();
      this._addTeams();
    }
  }

  static _addTeams() {
    const weeks = 2;
    let erqiTeam = new Team(1, 'Erqi');
    let victorTeam = new Team(2, 'Victor');
    let charlesTeam = new Team(3, 'Charles');
    let brandonTeam = new Team(4, 'Brandon');
    let micahTeam = new Team(5, 'Micah');
    let kimTeam = new Team(6, 'Kim');
    let eugeneTeam = new Team(7, 'Eugene');
    let leagueMap = new Map([
      [1, erqiTeam],
      [2, victorTeam],
      [3, charlesTeam],
      [4, brandonTeam],
      [5, micahTeam],
      [6, eugeneTeam]
    ]);
    this.setSchedule(leagueMap);
    Database.db.set('teams', leagueMap);
  }

  static setSchedule(leagueMap) {
    let matchups1 = new Array();
    matchups1.push([leagueMap.get(1), leagueMap.get(6)]);
    matchups1.push([leagueMap.get(2), leagueMap.get(5)]);
    matchups1.push([leagueMap.get(3), leagueMap.get(4)]);
    Schedule.setWeek(1, matchups1);

    let matchups2 = new Array();
    matchups2.push([leagueMap.get(1), leagueMap.get(2)]);
    matchups2.push([leagueMap.get(3), leagueMap.get(5)]);
    matchups2.push([leagueMap.get(4), leagueMap.get(6)]);
    Schedule.setWeek(2, matchups2);

    let scheduleMap = new Map([
      [1, Schedule.getWeeks()[0]],
      [2, Schedule.getWeeks()[1]]
    ])
    Database.db.set('matchupWeeks', scheduleMap)
  }
}

module.exports = StartUp;