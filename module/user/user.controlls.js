import  executeQuary from "../../DB/DBhelpers.js";

export async function RetrieveData(req,res){
    try{
        const quary = 'select * from users';
        const param = [];
        const result = await executeQuary(quary,param)
        res.json({result});
    }catch(error){
        res.json({ message: error.message, error })
    }
}

export async function Createuser(req, res) {
    try{
        const { name, email } = req.body;
        const query = "insert into users (name,email) values (?,?);";
        const params = [name, email];
        const result = await executeQuary(query, params);
        res.json({result});
    }catch(error){
        res.json({ message: error.message, error });
    }
    
}

export async function getUserId(req, res) {
    try {
        const { id } = req.params;
        const query = 'select * from users where id = ?';
        const params = [id];
        const result = await executeQuary(query, params);
        res.json({ result });
    }catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function updateById(req, res) {
    try {
        const { id } = req.params;
        const {name,email} = req.body;
        const query = 'UPDATE users SET name = ?, email = ? where id = ?';
        const params = [name,email,id];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }
}

export async function deleteById(req, res) {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM users WHERE id = ?;';
        const params = [id];
        const result = await executeQuary(query, params);
        res.json({ result });
    } catch (error) {
        res.json({ message: error.message, error });
    }
}