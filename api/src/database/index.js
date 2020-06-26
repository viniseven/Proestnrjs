import { Sequelize } from 'sequelize'
import dbConfig from '../config/database'

import Ticket from '../app/models/Ticket'

const models = [Ticket]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfig)

    models.map((model) => model.init(this.connection))
  }
}

export default new Database()
