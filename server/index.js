import express from 'express'
import "dotenv/config";
import cors from 'cors'
import getRouter from './routes/get.js';
import postRouter from './routes/post.js';



const app = express()

app.use(express.json())

app.use(cors())

app.use("/", (req, res, next) => {
  console.log('========================================');
  console.log(`method: ${req.method} url: ${req.url}`);
  console.log(new Date().toLocaleString());
  console.log('========================================');
  next();
});

app.use('/music',getRouter)

app.use("/create",postRouter)

app.listen(process.env.PORT,() => console.log(`server listening on port ${process.env.PORT}`))