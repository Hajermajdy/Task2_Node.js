import { Router } from "express";
import * as postrouter from './post.controlls.js'

const router = Router();

router.get('/post', postrouter.RetrieveData);
router.post('/post', postrouter.Createuser);
router.get('/post/:id', postrouter.getUserId);
router.put('/post/:id', postrouter.updateById);
router.delete('/post/:id', postrouter.deleteById)

export default router;