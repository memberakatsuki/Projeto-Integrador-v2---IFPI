const express = require("express")
const path = require("path")
const routes = require("./routes")
const { createServer } = require("http")
const { Server } = require("socket.io")
const cors = require("cors")
require("dotenv").config()

require("./database")

const app = express()

const http = createServer(app) //protocolo http
const io = new Server(http) //protocolo ws

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/client", (req,res) =>{
  return res.render("html/client.html")
})

app.get("/admin", (req,res) =>{
  return res.render("html/admin.html")
})

/* app.get("/pages/register", (req,res) =>{
  return res.render("html/register.html")
}) */

io.on("connection" , (socket) =>{
  //console.log("se conectou", socket.id)
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)


module.exports = {
  http,
  io
}