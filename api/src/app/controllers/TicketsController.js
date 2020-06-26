import Ticket from '../models/Ticket'

class TicketsController {
  async index(req, res) {
    const tickets = await Ticket.findAll()

    if (tickets === null) return res.json({})

    return res.json(tickets)
  }

  async store(req, res) {
    const ticket = await Ticket.create(req.body)

    return res.json(ticket)
  }
}

export default new TicketsController()
