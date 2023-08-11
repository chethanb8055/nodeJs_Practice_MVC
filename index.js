const express = require('express');
const morgan = require('morgan');
const server = express();
// const mongoose = require('mongoose');
const productRouter = require('./routes/product')
const userRouter = require('./routes/user');
require('dotenv').config()
const mongoose = require('mongoose'); // Uncomment this line




main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ecommerce")
  console.log("database connected")
}





//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

server.listen(process.env.PORT, () => {
  console.log('server started');
});
