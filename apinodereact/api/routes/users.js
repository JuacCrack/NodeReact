import express from "express"; //IMPORTAMOS LA BIBLIOTECA EXPRESS
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js"; //IMPORTAMOS LAS FUNCIONES DE user.js

const router = express.Router(); //ESTABLECEMOS RUTAS PARA CADA FUNCION

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;