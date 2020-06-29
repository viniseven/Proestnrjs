import { Model, DataTypes } from 'sequelize'

class Team extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      { sequelize }
    )
  }
}

export default Team
