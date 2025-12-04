import express from 'express'
import "dotenv/config";
import cors from 'cors'
import router from './routes/get.js';



const app = express()

app.use(cors())

app.use("/", (req, res, next) => {
  console.log('----------------------------------------');
  console.log(`method: ${req.method} url: ${req.url}`);
  console.log(new Date().toLocaleString());
  console.log('----------------------------------------');
  next();
});

app.use('/',router)

app.listen(process.env.PORT,() => console.log(`server listening on port ${process.env.PORT}`))