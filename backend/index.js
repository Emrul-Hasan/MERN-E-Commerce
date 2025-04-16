const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;




//middle ware setup

app.use(express.json({limit: "25mb"}));
// app.use((express.urlencoded({limit: "25mb"})));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}))

//all router

const authRoutes = require('./src/users/user.route');
const productRoutes = require('./src/products/products.route');
const reviewRoutes = require ('./src/reviews/reviews.router')

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes)
app.use("/api/reviews", reviewRoutes);



main()
.then(()=> console.log("mongo is succefully connecteds"))
.catch(err => console.log(err));



async function main() {
    await mongoose.connect(process.env.DB_URL);
  
    app.get('/', (req, res) => {
        res.send('Hello Developer')
      })
  }
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})