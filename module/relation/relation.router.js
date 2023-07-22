import { Router } from "express";
import * as realtionrouter from './relatin.controlls.js'

const router = Router();

router.get('/add', realtionrouter.add);
router.get('/getall', realtionrouter.RetrieveData);
router.get('/posts/:id/tags',realtionrouter.getAllTags);
router.get('/tags/:id/posts', realtionrouter.getAllpost);
router.get('/user/:id/posts', realtionrouter.getAllpostWithUser);

export default router;