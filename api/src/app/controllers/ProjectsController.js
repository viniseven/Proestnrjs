import Project from '../models/Project'
import User from '../models/User'

class ProjectController {
  async store(req, res) {
    const { user_id } = req.params
    const { subject, description, type = 'project', status = 'analyze' } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'Usuario não existe' })
    }

    const project = await Project.create({
      subject,
      description,
      type,
      status,
      user_id,
    })

    return res.json({ success: 'true', project })
  }
}

export default new ProjectController()
