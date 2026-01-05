import express from 'express'
import { checkVerifyFishing } from './post.js'

export const sort = express()

sort.post("/",async(req,res)=>{
    const body = req.body
    const result = await checkVerifyFishing(body)
    res.json(result)
})