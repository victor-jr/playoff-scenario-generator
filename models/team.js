const Record = require('./record.js');
const Week = require('./week.js');

class Team {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.record = new Record();
  }
}

module.exports = Team;