class Database {
  static db;

  static init() {
    this.db = new Map();
  }
}

module.exports = Database;