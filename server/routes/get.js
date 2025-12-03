import express from 'express'
import { getSignedUrlsFromFolder } from '../db/connectToS3.js'

const router = express.Router()



router.get('/channel/:channame',async(req,res) => {
  try {
    const urls = await getSignedUrlsFromFolder(req.params.channame)
    await new Promise(resolve => (setTimeout(resolve,2000)))
    res.json({"music":urls})
  } catch (error) {
    res.status(500).json({"msg":error})
  }
})

export default router