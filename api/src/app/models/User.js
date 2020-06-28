import { Model, DataTypes } from 'sequelize'
import bcrypt from 'bcrypt'
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.VIRTUAL,
        password: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.STRING,
        district: DataTypes.STRING,
        state: DataTypes.STRING,
        cep: DataTypes.STRING,
      },
      { sequelize }
    )

    this.addHook('beforeSave', async (user) => {
      if (user.password_hash) {
        user.password = bcrypt.hash(user.password, 8)
      }
    })
  }

  // has -> procura a coluna dentro de quem vc referenciou (as: contact)
  // belong -> procura a coluna dentro de si mesmo ()

  static associate(models) {
    this.hasMany(models.Contact, { foreignKey: 'user_id', as: 'contacts' })
  }
}

export default User
