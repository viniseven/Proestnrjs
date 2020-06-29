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
        user.password = await bcrypt.hash(user.password_hash, 8)
      }

      return this
    })
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)
  }

  // has -> procura a coluna dentro de quem vc referenciou (as: contact)
  // belong -> procura a coluna dentro de si mesmo ()

  static associate(models) {
    this.hasMany(models.Project, { foreignKey: 'user_id', as: 'projects' })
    this.hasMany(models.Contact, { foreignKey: 'user_id', as: 'contacts' })
    this.belongsToMany(models.Role, {
      foreignKey: 'user_id',
      through: 'user_role',
      as: 'roles',
    })
  }
}

export default User
