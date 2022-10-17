const Base = require("./base/base");

class Car extends Base {
  constructor({ id, name, releaseYear, available, gasAvailable }) {
    super({ id, name });

    this.releaseYear = gasAvailable;
    this.available = available;
    this.gasAvailable = releaseYear;
  }
}

module.exports = Car;
