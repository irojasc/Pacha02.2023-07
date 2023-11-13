const express = require("express");
const path = require("path")
const app = express()
const server = require("http").createServer(app);
const PORT = 3000

const io = require("socket.io")(server)

io.on("connection", client => {
    console.log("Alguien se conecto ahora mismo")
    client.on("chat", (msg) => {
        io.emit("chat", (msg));
    });
    client.on("event", data => {console.log("Alguien se conecto")});
    client.on("disconnect", () => {});

})

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})