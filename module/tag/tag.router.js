import { Router } from "express";
import * as tagsrouter from './tag.controlls.js'

const router = Router();

router.get('/tags', tagsrouter.RetrieveData);
router.post('/tags', tagsrouter.Createuser);
router.get('/tags/:id', tagsrouter.getUserId);
router.put('/tags/:id', tagsrouter.updateById);
router.delete('/tags/:id', tagsrouter.deleteById)

export default router;