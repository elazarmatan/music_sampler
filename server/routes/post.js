import express from 'express'
import { savestate } from '../db/connectToS3.js'

const postRouter = express.Router()

postRouter.post('/saveState/:nameFile',async(req,res) => {
    try {
        if(req.body && req.params.nameFile){
            await savestate(req.body,req.params.nameFile)
            await new Promise(resolve => (setTimeout(resolve,2000)))
            res.send('succes')
        }
        else{
            res.status(400).send('you loss params or body')
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

export default postRouter