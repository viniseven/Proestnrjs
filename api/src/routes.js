import { Router } from 'express'

import UsersController from './app/controllers/UsersController'

const routes = new Router()

routes.get('/', (req, res) => res.json({ api: 'backend funcionando' }))

routes.get('/users', UsersController.index)
routes.post('/users/save', UsersController.store)
// routes.post('/users/:id', UsersController.show)

export default routes
