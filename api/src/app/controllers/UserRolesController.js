import User_role from '../models/user_role'
import Role from '../models/Role'
import User from '../models/User'

class UserRoleController {
  async store(req, res) {
    const { user_id, role_id } = req.body

    const user = await User.findByPk(user_id, { attributes: ['id'] })
    const role = await Role.findByPk(role_id, { attributes: ['id'] })

    if (!user || !role) {
      return res.status(400).json({ error: 'Role or User not found' })
    }

    const hasRelationship = await User_role.findOne({
      where: { user_id, role_id },
      attributes: ['id'],
    })

    if (hasRelationship) {
      return res.status(400).json({ error: 'This user already has this role' })
    }

    const userRole = await User_role.create({
      user_id,
      role_id,
    })

    return res.json({ success: 'true', userRole })
  }
}

export default new UserRoleController()
