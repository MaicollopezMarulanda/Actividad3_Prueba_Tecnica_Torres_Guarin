//este modulo de expres nos permite crear todo el modulo de rutas
import { Router } from "express";

//Estos import se hacen desde los controlladores
import { getUsuarios } from "../controllers/usuarios.controller.js";
import { getUsuarioId } from "../controllers/usuarios.controller.js";
import { postUsuario } from "../controllers/usuarios.controller.js";
import { putUsuario } from "../controllers/usuarios.controller.js";
import { deleteUsuario } from "../controllers/usuarios.controller.js";
const router = Router();

// app.get('/usuarios', (req, res) => res.send("MOSTRAR TODOS LOS USUARIOS"))
// app.get('/usuarios/id', (req, res) => res.send("MOSTRAR UN SOLO USUARIOS"))
// app.post('/usuarios', (req, res) => res.send("REGISTRAR USUARIO"))
// app.put('/usuarios', (req, res) => res.send("ACTUALIZAR USUARIO"))
// app.delete('/usuarios', (req, res) => res.send("ELIMINAR USUARIO"))

//Se definen las rutas
router.get('/usuarios',getUsuarios)
router.get('/usuarios/:id',getUsuarioId)
router.post('/usuarios', postUsuario)
//El metodo put meobliga a actualizar todo el objeto no se puede actualizar parcialmente
//para solucionar esto se utiliza un metodo patch que permite actualizar parcialmente
//router.put('/usuarios/:id', putUsuario)
router.patch('/usuarios/:id', putUsuario)
router.delete('/usuarios/:id', deleteUsuario)
export default router;