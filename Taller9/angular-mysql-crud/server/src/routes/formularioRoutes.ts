import { Router } from 'express';
import formularioController from '../controllers/formularioController';

class FormularioRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    } 

    config():void{
        this.router.get('/',formularioController.list);
        this.router.get('/:id',formularioController.getOne);
        this.router.post('/',formularioController.create);
        this.router.put('/:id',formularioController.update);
        this.router.delete('/:id',formularioController.delete);
    }
}

const  formularioRoutes = new FormularioRoutes();
export default formularioRoutes.router;