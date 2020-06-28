import Contacts from '../models/Contact'
import User from '../models/User'

class contactsController {
  async store(req, res) {
    const { user_id } = req.params
    const { number } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'Usuario não existe' })
    }

    const contacts = await Contacts.create({
      number,
      user_id,
    })

    return res.json({ sucess: 'true', contacts })
  }
}

export default new contactsController()
