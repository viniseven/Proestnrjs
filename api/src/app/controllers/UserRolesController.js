import UserRole from '../models/user_role'
import Role from '../models/Role'
import User from '../models/User'

class UserRoleController {
  async store(req, res) {
    const { user_id, role_id } = req.body

    const user = await User.findByPk(user_id)
    const role = await Role.findByPk(role_id)

    if (!user || !role) {
      return res.status(400).json({ error: 'Role or User not found' })
    }

    const userRole = await UserRole.create({
      user_id,
      role_id,
    })

    return res.json({ success: 'true', userRole })
  }
}

export default new UserRoleController()
