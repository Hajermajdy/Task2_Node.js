import executeQuary from "../../DB/DBhelpers.js";

export async function getAllTags(req, res) {
    try {
        const { id } = req.params;
        const quary = 'select * from relationship where post_id = ?'
        const params = [id];
        const result = await executeQuary(quary, params)
        res.json({ result })
    } catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function getAllpost(req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const quary = 'select * from relationship where tag_id = ?'
        const params = [id];
        const result = await executeQuary(quary, params)
        res.json({ result })
    } catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function getAllpostWithUser(req, res) {
    try {
        const { id } = req.params;
        const quary = 'select * from users where id = ?'
        const params = [id];
        const user_id = await executeQuary(quary, params)
        const us_id = user_id[0].id;
        const query = 'select * from posts where userid = ?';
        const paramsOfUserId = [us_id];
        const result = await executeQuary(query, paramsOfUserId);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function add(req, res) {
    try {
        const {post_id,tag_id} = req.body;
        const quary = 'insert into relationship (post_id,tag_id) values (?,?)';
        const param = [post_id, tag_id];
        const result = executeQuary(quary,param);
        res.json({result})
    } catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function RetrieveData(req, res) {
    try {
        const quary = 'select * from relationship';
        const param = [];
        const result = await executeQuary(quary, param)
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error })
    }
}

