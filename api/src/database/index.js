import { Sequelize } from 'sequelize'
import dbConfig from '../config/database'

import User from '../app/models/User'
import Contact from '../app/models/Contact'
import Role from '../app/models/Role'
import User_role from '../app/models/user_role'

const models = [User, Contact, Role, User_role]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfig)

    models.map((model) => model.init(this.connection))

    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models)
      }
    })
  }
}

export default new Database().connection
