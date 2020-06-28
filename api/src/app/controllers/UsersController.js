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
}

export default new UsersController()
