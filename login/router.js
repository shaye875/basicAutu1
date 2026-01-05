import { checkWriteUser } from './post.js'
import { selectAll } from './queries.js'
import { verifyToken } from '../loginJWT/app.js'

import express from 'express'

export const user = express()

user.post("/",verifyToken,async(req,res)=>{
    console.log(req.user);
    
    const body = req.body
    const result = await checkWriteUser(body)
    for(let key in result){
        if(key === "false"){
            res.status(400)
            return res.json(result)
        }
    }
    res.status(201)
    res.json(result)
})

user.get("/",async(req,res)=>{
   const result = await selectAll()
   res.json(result)
})