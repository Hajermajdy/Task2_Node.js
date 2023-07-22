import express from 'express';
import userrouter from './module/user/user.router.js';
import tagsrouter from './module/tag/tag.router.js';
import postrouter from './module/post/post.router.js';
import relationrouter from './module/relation/relation.router.js'

const app = express();
app.use(express.json());

app.use(userrouter)
app.use(tagsrouter)
app.use(postrouter)
app.use(relationrouter)

app.listen(3000,()=>{
    console.log("Server is Running ......");
})
