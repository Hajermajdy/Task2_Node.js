import executeQuary from "../../DB/DBhelpers.js";

export async function RetrieveData(req, res) {
    try {
        const quary = 'select * from posts';
        const param = [];
        const result = await executeQuary(quary, param)
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error })
    }
}

export async function Createuser(req, res) {
    try {
        const { title, contect , userid } = req.body;
        const query = "insert into posts (title, contect , userid) values (?,?,?);";
        const params = [title, contect, userid];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }

}

export async function getUserId(req, res) {
    try {
        const { id } = req.params;
        const query = 'select * from posts where id = ?';
        const params = [id];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function updateById(req, res) {
    try {
        const { id } = req.params;
        const { title, contect, userid } = req.body;
        const query = 'UPDATE posts SET title = ?, contect = ?, userid = ? where id = ?';
        const params = [title, contect, userid, id];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function deleteById(req, res) {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM posts WHERE id = ?;';
        const params = [id];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }
}