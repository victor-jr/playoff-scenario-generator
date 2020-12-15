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
let matchups = Database.db.get('matchupWeeks').get(1).matchups;
assignWinLoss(possibleResults);

function assignWinLoss(possibleResults) {
  let possibleOutcomes = new Array();
  let matchups = Database.db.get('matchupWeeks').get(1).matchups;
  let matchupsCopy = Object.assign({}, matchups)
  for (let i = 0; i < possibleResults.length; i++) {
    for (let j = 0; j < possibleResults[i].length; j++) {
      if (possibleResults[i] == 'W') {
        let matchup = matchupsCopy[j];
        let homeTeam = matchup.homeTeam;
        let awayTeam = matchup.awayTeam;
        matchup.winner = homeTeam;
        matchup.loser = awayTeam;
        possibleOutcomes.push(matchup);
      } else {
        let matchup = matchupsCopy[j];
        let homeTeam = matchup.homeTeam;
        let awayTeam = matchup.awayTeam;
        matchup.winner = awayTeam;
        matchup.loser = homeTeam;
        possibleOutcomes.push(matchup);
      }
    }
  }
  console.log(possibleOutcomes);
}