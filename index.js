const fastCartesian = require('fast-cartesian')
const StartUp = require('./startup.js');
const Database = require('./database.js');

StartUp.init();

//each win loss array represents a matchup
let leagueSizeWinLossOutcoms = new Array();
let totalMatchups = Database.db.get('teams').size / 2;
for (let i = 0; i < totalMatchups; i++) {
  leagueSizeWinLossOutcoms.push(['W', 'L']);
};

let possibleResults = fastCartesian(leagueSizeWinLossOutcoms);
// console.log(possibleResults)
let matchups = Database.db.get('matchupWeeks').get(1).matchups;
console.log(matchups);
for (res of possibleResults) {
  //get week 1 matchups
  console.log(`Erqi - ${res[0]}, Vic - ${res[1]}, Charles - ${res[2]}`)
}