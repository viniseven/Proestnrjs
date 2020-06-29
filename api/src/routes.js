import { Router } from 'express'

import UsersController from './app/controllers/UsersController'
import ContactsController from './app/controllers/ContactsController'
import RolesController from './app/controllers/RolesController'
import UserRoleController from './app/controllers/UserRolesController'
import ProjectController from './app/controllers/ProjectsController'

const routes = new Router()

routes.get('/', (req, res) => res.json({ api: 'backend funcionando' }))

routes.get('/users/:id/list', UsersController.show)
routes.get('/users', UsersController.index)
routes.post('/users/save', UsersController.store)
routes.delete('/users/:user_id/destroy', UsersController.delete)

routes.get('/contacts/:user_id/list', ContactsController.show)
routes.post('/contacts/:user_id/save', ContactsController.store)
routes.put('/contacts/:id/update', ContactsController.update)
routes.delete('/contacts/:id/destroy', ContactsController.delete)

routes.get('/roles/:user_id/list', RolesController.show)
routes.post('/roles/save', RolesController.store)
routes.put('/roles/:id/update', RolesController.update)
routes.delete('/roles/:id/destroy', RolesController.delete)

routes.post('/user/save', UserRoleController.store)

routes.post('/project/:user_id/save', ProjectController.store)

export default routes
