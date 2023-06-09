import { Router } from "express"
import CartoesController,{createTableCartoes} from "./controllers/CartoesController"
import UsersController,{createTablePessoas} from "./controllers/UsersController"
import SessionsController from "./controllers/SessionsController"
import MensagensController,{createTableMensagens} from "./controllers/MensagensController"
import auth from './middlewares/auth'
const routes = new Router()
// createTablePessoas()
// createTableCartoes()
// createTableMensagens()
//controllers publicos
routes.post('/sessions'     ,SessionsController.create)
routes.post('/users'        ,UsersController.create)
routes.post('/users/:user_id/mensagens',MensagensController.create)

// //middleware
routes.use(auth)
//-- protegido daqui pra baixo

//controllers privados
routes.get('/users'         ,UsersController.index)
routes.get('/users/:id'     ,UsersController.show)
routes.put('/users/:id'     ,UsersController.update) 
routes.delete('/users/:id'  ,UsersController.destroy) 

routes.get('/users/:user_id/Cartoes'       ,CartoesController.index)
routes.post('/users/:user_id/Cartoes'      ,CartoesController.create)
routes.delete('/users/:user_id/Cartoes/:id',CartoesController.destroy)

routes.get('/mensagens'          ,MensagensController.index)
routes.get('/mensagens/:user_id' ,MensagensController.show)

export default routes
