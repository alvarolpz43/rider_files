import { Router } from "express";
import { createUser, getUser } from "../controllers/users.controllers.js";
import { upload } from "../multer.js";

const miruta = Router();

miruta.get('/users',getUser);
miruta.post('/create-user',upload.fields([{name:'image',maxCount:1}]),createUser);

export default miruta;