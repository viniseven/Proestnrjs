import { Router } from 'express'
import TicketsController from './app/controllers/TicketsController'

const routes = new Router()

routes.get('/', (req, res) => res.json({ api: 'backend funcionando' }))

routes.get('/tickets', TicketsController.index)
routes.post('/tickets/save', TicketsController.store)

export default routes
