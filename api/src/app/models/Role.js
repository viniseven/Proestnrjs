import { Model, DataTypes } from 'sequelize'

class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      { sequelize }
    )
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'role_id',
      through: 'user_role',
      as: 'users',
    })
  }
}

export default Role
