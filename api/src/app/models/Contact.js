import { Model, DataTypes } from 'sequelize'

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        number: DataTypes.STRING,
      },
      { sequelize }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' })
  }
}

export default Contact
