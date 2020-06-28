import { Sequelize } from 'sequelize'
import dbConfig from '../config/database'

import User from '../app/models/User'
import Contact from '../app/models/Contact'

const models = [User, Contact]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfig)

    models.map((model) => model.init(this.connection))

    models.forEach((model) => model.associate(this.connection.models))
  }
}

export default new Database().connection
