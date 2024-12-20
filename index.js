import express from "express"
import db from "./database/db.js"
import userRouter from "./routes/user.routes.js"
import "dotenv/config"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"
import chatRouter from "./routes/chat.routes.js"

const PORT = process.env.PORT || 5000

const app = express()

const httpServer = http.createServer(app)

const io = new Server(httpServer)


// io.on("connection", (socket) => {
    
// })



// for connecting backend and frontend

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET , POST , PUT , DELETE , PATCH , HEAD",
    credentials : true
}

app.use(cors(corsOptions))

app.use(express.json())

app.use("/user", userRouter)
app.use("/chat", chatRouter);

httpServer.listen(PORT, () => {
    db()
    console.log(`Server is running on http://localhost:${PORT}`)
})