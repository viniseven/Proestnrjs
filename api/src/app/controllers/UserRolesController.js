import UserRole from '../models/User_role'
import Role from '../models/Role'
import User from '../models/User'

class UserRoleController {
  async store(req, res) {
    const { user_id, role_id } = req.body
    console.log(user_id, role_id)

    const user = await User.findByPk(user_id, { attributes: ['id'] })
    const role = await Role.findByPk(role_id, { attributes: ['id'] })

    if (!user || !role) {
      return res.status(400).json({ error: 'Role or User not found' })
    }

    const hasRelationship = await UserRole.findOne({
      where: { user_id, role_id },
      attributes: ['id'],
    })

    if (hasRelationship) {
      return res.status(400).json({ error: 'This user already has this role' })
    }

    const userRole = await UserRole.create({
      user_id,
      role_id,
    })

    return res.json({ success: 'true', userRole })
  }

  async update(req, res) {
    const { user_id, role_idCurrent } = req.params
    const { role_id } = req.body

    const user = await User.findByPk(user_id)
    const role = await Role.findByPk(role_id)

    if (!user || !role) {
      return res.status(400).json({ error: 'Role or User not found' })
    }

    const id_userRole = await UserRole.findOne({
      where: {
        user_id,
        role_id: role_idCurrent,
      },
    })

    const updateRoleUser = await UserRole.update(
      { role_id },
      {
        where: {
          id: id_userRole,
        },
      }
    )

    return res.json({ success: true, updateRoleUser })
  }
}

export default new UserRoleController()
