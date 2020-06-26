import { Model, DataTypes } from 'sequelize'

class Ticket extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        contact: DataTypes.STRING,
        subject: DataTypes.STRING,
        content: DataTypes.STRING,
      },
      { sequelize }
    )
  }
}

export default Ticket
