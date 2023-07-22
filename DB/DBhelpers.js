import connection from "./connection.js";

function executeQuary(query,param){
    return new Promise((resolve,reject)=>{
        connection.execute(query, param,(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

export default executeQuary;