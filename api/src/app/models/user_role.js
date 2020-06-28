import { Model, DataTypes } from 'sequelize'

class User_role extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        role_id: DataTypes.INTEGER,
      },
      { sequelize }
    )
  }
}

export default User_role
