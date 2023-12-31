import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

//Routes

const app = express();


// Middleware
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


dotenv.config()

mongoose.connect(process.env.MONGO_DB)
    .then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`)))
    .catch((err) => console.log("mongoose Connection Error", err))


// usage of  route

app.use("/auth", AuthRoute)

app.use("/user",UserRoute)

app.use("/posts",PostRoute)


