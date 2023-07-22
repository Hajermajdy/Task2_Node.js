import { Router } from "express";
import * as usercounter from './user.controlls.js'

const router = Router();

router.get('/user', usercounter.RetrieveData);
router.post('/user',usercounter.Createuser);
router.get('/user/:id',usercounter.getUserId);
router.put('/user/:id',usercounter.updateById);
router.delete('/user/:id',usercounter.deleteById)

export default router;