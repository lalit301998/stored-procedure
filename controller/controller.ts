import { Request, Response } from "express";
import { conn } from "../database";
export class UserController {
  
  async getUser(req: Request, res: Response) {
      let sqlquery = `call sp_getuser()`
    conn.query(sqlquery, (err, row, fields) => {
        console.log(row,fields)
        try{res.send({
            message: "successfully fetched!",
            data: row
        })
    }catch(err){
        throw err
    }
    })
    
  }
  async deleteUser(req: Request, res: Response) {
      let sqlquery = `call sp_deluser(?)` 
  conn.query(sqlquery, (err, row, fields) => {

    res.send({

        message: "successfully delete",
        data: row

    })

    if (!err)
        console.log(row)
    else
        console.log(err)
})
}

async createUser(req: Request, res: Response) {
conn.query(`INSERT INTO users (name, email, gender) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.gender}')`, (err, row, fields) => {
if(row){
res.send({
    message: "user insereted",
    data: req.body
    // message:"bdhfhdhjjckja"
})
}
else{
//   console.log("this is error", err.sqlMessage);
if (err?.sqlMessage) {
    res.status(400).send({
        message:err?.sqlMessage
    })

}
}}
)}

async updateUser(req: Request, res: Response) {
    console.log("name...........",req.body);
    

  conn.query(`UPDATE users SET name = '${req.body.name}' WHERE id = '${req.body.id}'`, (err, row, fields) => {
   console.log(req.body.name);
    res.send({
        message: "successfully update",
        data: row

    })

    if (!err)
        console.log(row)
    else
        console.log(err)
})
}
}

