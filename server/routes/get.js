import express from 'express'
import { downloadFiles, getSignedUrlsFromFolder, listFiles } from '../db/connectToS3.js'

const getRouter = express.Router()



getRouter.get('/channel/:channame',async(req,res) => {
  try {
    const urls = await getSignedUrlsFromFolder(req.params.channame)
    await new Promise(resolve => (setTimeout(resolve,2000)))
    res.json({"music":urls})
  } catch (error) {
    res.status(500).json({"msg":error})
  }
})

getRouter.get('/musicsaves',async(req,res) => {
  const allMusic = await downloadFiles('createMusic')
  res.json(allMusic)
})

export default getRouter