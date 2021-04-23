import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes.js"
import todoRoutes from "./routes/todoRoutes.js"


dotenv.config()

try{
  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("MongoDB connection established")
  )
}catch(err){
  console.log("DB connection error,", err)
}

const app = express()

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// API Routes
app.use("/api/users", userRoutes)
app.use("/api/todos", todoRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Seerver running in ${process.env.NODE_ENV} on port ${PORT}...`)
})
