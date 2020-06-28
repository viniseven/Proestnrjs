import User from '../models/User'

class UsersController {
  async index(req, res) {
    const users = await User.findAll()

    if (users.length === 0) return res.status(400).json({ error: 'Users not found.' })

    return res.json(users)
  }

  async store(req, res) {
    const user = await User.create(req.body)

    return res.json(user)
  }

  async delete(req, res) {
    const { user_id } = req.params
    const user = await User.findByPk(user_id)

    if (!user) return res.status(400).json({ error: 'User not found.' })

    await User.destroy({ where: { id: user_id } })

    return res.json({ success: 'This user has been deleted.' })
  }
}

export default new UsersController()
