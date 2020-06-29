import User from '../models/User'

class UsersController {
  async index(req, res) {
    const users = await User.findAll({
      include: [
        {
          association: 'contacts',
          attributes: ['number'],
        },
        {
          association: 'projects',
          attributes: ['subject', 'description'],
        },
        {
          association: 'roles',
          attributes: ['name', 'description'],
          through: { attributes: [] },
        },
      ],
    })

    if (users.length === 0) return res.status(400).json({ error: 'Users not found.' })

    return res.json(users)
  }

  async show(req, res) {
    const { id } = req.params

    const user = await User.findByPk(id, {
      include: [
        {
          association: 'contacts',
          attributes: ['number'],
        },
        {
          association: 'roles',
          attributes: ['name', 'description'],
          through: { attributes: [] },
        },
      ],
    })

    if (!user) {
      return res.json({ error: 'User not found!' })
    }

    return res.status(200).json(user)
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
