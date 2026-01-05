import { checkVerifyUser } from "./post.js"
import express from 'express'

export const verygy = express()

verygy.post("/",async(req,res)=>{
    const body = req.body
    const result = await checkVerifyUser(body)
    res.json(result)
})