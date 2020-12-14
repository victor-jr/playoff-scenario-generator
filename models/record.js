class Record {
  constructor() {
    this.wins = 0;
    this.losses = 0;
  }

  addWin() {
    this.wins++;
  }

  addLosses() {
    this.losses++;
  }
}

module.exports = Record;