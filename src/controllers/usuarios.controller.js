import { pool } from "../db.js";

export const getUsuarios = async(req, res) => {
    try {
        const [rows] = await pool.query("Select * from usuario");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ 
            "message": "ALGO SALIO MAL CON LA CONSULTA"
        })
    }
    //throw new Error("NO SE PUEDE OBTENER NINGUN USUARIO");
    
};

export const getUsuarioId = async (req, res) => {
    try {
        const [rows] = await pool.query("select * from usuario where id = ?",[req.params.id]);
        if(rows.length <= 0) return res.status(404).json({
            "Message": "Usuario no encontrado"
        });
        res.json(rows);
        
    } catch (error) {
        return res.status(500).json({ 
            "message": "ALGO SALIO MAL AL CONSULTAR EL USUARIO"
        })
    }
    //res.send(req.params);  
    //console.log(rows);
    
};

export const postUsuario = async (req, res) => {
    const {cedula,nombreCompleto,telefono,direccion} = req.body;
    try {        
        const [rows] = await pool.query("insert into usuario (cedula,nombreCompleto,telefono,direccion) values (?,?,?,?)",[cedula,nombreCompleto,telefono,direccion]);
        //console.log(req.body);
        res.send({
            id : rows.insertId,
            cedula,
            nombreCompleto,
            telefono,
            direccion,
        });
    } catch (error) {
        return res.status(500).json({ 
            "message": "ALGO SALIO MAL AL REGISTRAR EL USUARIO"
        })
    }


    
};

export const deleteUsuario = async (req, res) => {
    try {
        const [result] = await pool.query("delete from usuario where id = ?",[req.params.id]);
        if(result.affectedRows <= 0)return res.status(404).json({
            "Message":"NO SE ELIMINO NINGUN USUARIO"
        })
        console.log(result);
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({ 
            "message": "ALGO SALIO MAL AL ELIMINAR EL USUARIO"
        })
    }

};

export const putUsuario = async(req, res) => {
    const {id} = req.params;
    const {cedula,nombreCompleto,telefono,direccion} = req.body;
    try {        
        const [result] = await pool.query('update usuario set cedula = IFNULL(?,cedula),nombreCompleto = IFNULL(?,nombreCompleto),telefono = IFNULL(?,telefono),direccion = IFNULL(?,direccion) where id = ?',[cedula,nombreCompleto,telefono,direccion,id]);
        if(result.affectedRows <= 0)return res.status(404).json({
            "Message":"NO SE ACTUALIZO NINGUN USUARIO"
        })

        const [rows] = await pool.query("select * from usuario where id = ?",[id]);

        //console.log(result);
        //console.log(cedula,nombreCompleto,telefono,direccion,id);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ 
            "message": "ALGO SALIO MAL AL ACTUALIZAR EL USUARIO"
        })
    }

    
};

