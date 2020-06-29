import Role from '../models/Role'
// import User from '../models/User'

class RolesController {
  async show(req, res) {
    const { id } = req.params

    const roles = await Role.findAll({
      where: { id },
      attributes: ['name', 'description'],
    })

    if (roles.length === 0) return res.status(400).json({ error: 'Role not has found' })

    return res.json({ success: true, roles })
  }

  async store(req, res) {
    const { name, description } = req.body

    const roles = await Role.findOne({ where: { name } })

    if (roles) {
      return res.status(400).json({ error: 'Role was found' })
    }

    const role = await Role.create({
      name,
      description,
    })

    return res.json({ success: 'true', role })
  }

  async update(req, res) {
    const { id } = req.params

    const role = await Role.findByPk(id)

    if (role) {
      await role.update(req.body, { id })
      return res.json({ success: 'Role has been updated.' })
    }

    return res.status(400).json({})
  }

  async delete(req, res) {
    const { id } = req.params

    const role = await Role.findByPk(id)
    if (!role) return res.status(400).json({ error: 'This role has not found' })

    await role.destroy({ where: { id } })
    return res.json({ success: 'Role has been Deleted.' })
  }
}

export default new RolesController()
