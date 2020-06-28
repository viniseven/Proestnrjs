import Contact from '../models/Contact'
import User from '../models/User'

class contactsController {
  async show(req, res) {
    const { user_id } = req.params

    const contacts = await Contact.findAll({
      where: { user_id },
      attributes: ['number', 'user_id'],
    })

    return res.json({ success: true, contacts })
  }

  async store(req, res) {
    const { user_id } = req.params
    const { number } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'Usuario não existe' })
    }

    const contacts = await Contact.create({
      number,
      user_id,
    })

    return res.json({ success: 'true', contacts })
  }

  async update(req, res) {
    const { id } = req.params

    const contact = await Contact.findByPk(id)

    if (contact) {
      await contact.update(req.body, { id })
      return res.json({ success: 'Contact has been updated.' })
    }

    return res.status(400).json({})
  }

  async delete(req, res) {
    const { id } = req.params

    const contact = await Contact.findByPk(id)
    console.log(contact)
    if (contact) {
      await contact.destroy({ where: { id } })
      return res.json({ success: 'Contact has been Deleted.' })
    }

    return res.status(400).json({})
  }
}

export default new contactsController()
