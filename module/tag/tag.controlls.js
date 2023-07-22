import executeQuary from "../../DB/DBhelpers.js";

export async function RetrieveData(req, res) {
    try {
        const quary = 'select * from tags';
        const param = [];
        const result = await executeQuary(quary, param)
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error })
    }
}

export async function Createuser(req, res) {
    try {
        const {name} = req.body;
        const query = "insert into tags (name) values (?) ";
        const params = [name];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }

}

export async function getUserId(req, res) {
    try {
        const { id } = req.params;
        const query = 'select * from tags where id = ?';
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
        const { name} = req.body;
        const query = 'UPDATE tags SET name = ? where id = ?';
        const params = [name, id];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function deleteById(req, res) {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM tags WHERE id = ?;';
        const params = [id];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }
}