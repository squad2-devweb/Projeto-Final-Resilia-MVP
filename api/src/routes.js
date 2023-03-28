import { Router } from "express";
import HelloController from "./controllers/HelloController"
import RepositoriesController from "./controllers/RepositoriesController";
import UsersController,{createTablePessoas} from "./controllers/UsersController";
import SessionsController from "./controllers/SessionsController";
import auth from './middlewares/auth'
const routes = new Router()
createTablePessoas()
//controllers publicos
 //REST 
// routes.post('/sessions',SessionsController.create)
// routes.post('/users'        ,UsersController.create)
routes.post('/users/'        ,UsersController.insertPessoa)
// //middleware
// routes.use(auth)

//-- protegido daqui pra baixo
//controllers privados

//RESTFULL
routes.get('/users'         ,UsersController.selectPessoas)
routes.get('/users/:id'         ,UsersController.selectPessoa)
// routes.get('/users'         ,UsersController.index)
// routes.get('/users/:id'     ,UsersController.show)
 
// routes.put('/users/:id'     ,UsersController.update) 
routes.put('/users/:id'     ,UsersController.update) 
routes.delete('/users/:id'  ,UsersController.destroy) 
// routes.delete('/users/:id'  ,UsersController.destroy) 

// routes.get('/users/:user_id/repositories',RepositoriesController.index)
// routes.post('/users/:user_id/repositories',RepositoriesController.create)
// routes.delete('/users/:user_id/repositories/:id',RepositoriesController.destroy) 

export default routes
