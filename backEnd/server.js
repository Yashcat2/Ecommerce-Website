import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App config
const app = express()
const port =  process.env.PORT || 4000
connectDB()
connectCloudinary()
const allowedOrigins = [
  'https://infinity-frontend-beta.vercel.app',
  'https://infinity-admin-panel.vercel.app'
];

//middlewares
app.use(express.json()) //requst get passed using the jason




app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin: ' + origin));
    }
  },
  credentials: true
}));
 //can access backend from any ip

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product/',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/',(req,res)=>{
    res.send("API WORKING")  //whenever we open local host port 4000 the it shoul diplsay API WORKING msg

})

app.listen(port, ()=>console.log('Server started on PORT :' + port))





// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js'
// import userRouter from './routes/userRoute.js'
// import productRouter from './routes/productRoute.js'
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from './routes/orderRoute.js'

// // App config
// const app = express()
// const port =  process.env.PORT || 4000
// connectDB()
// connectCloudinary()

// //middlewares
// app.use(express.json()) //requst get passed using the jason


// app.use(cors()) //can access backend from any ip

// //api endpoints
// app.use('/api/user',userRouter)
// app.use('/api/product/',productRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)


// app.get('/',(req,res)=>{
//     res.send("API WORKING")  //whenever we open local host port 4000 the it shoul diplsay API WORKING msg

// })

// app.listen(port, ()=>console.log('Server started on PORT :' + port))
