import { Model, DataTypes } from 'sequelize'

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        subject: DataTypes.STRING,
        description: DataTypes.STRING,
        status: DataTypes.ENUM(['analyze', 'accepted', 'finished', 'refused']),
        type: DataTypes.ENUM(['project', 'ticket', 'budget']),
      },
      { sequelize }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' })
  }
}

export default Project
