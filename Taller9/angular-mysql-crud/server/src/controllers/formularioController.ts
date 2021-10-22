import {Request, Response} from 'express';
import pool from '../database';

class FormularioController{

    public async list (req: Request, res: Response) {
        const formulario = await pool.query('SELECT * FROM formulario' );
        res.json(formulario);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const formularios = await pool.query('SELECT * FROM formulario WHERE id = ?',{id});
        console.log(formularios.length);
        if (formularios.length > 0) {
            return res.json(formularios[0]);
        }
        res.status(404).json({ text: "El registro no existe" });
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        pool.query('INSERT INTO formulario set ?',[req.body]);
        res.json({Message: 'Guardado correctamente!'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const oldForm = req.body;
        await pool.query('UPDATE formulario set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Actualizado correctamente!" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM fomrulario WHERE id = ?', [id]);
        res.json({ message: "Borrado correctamente!" });
    }
}

const formularioController = new FormularioController();
export default formularioController;