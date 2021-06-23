const express = require("express")
const path = require("path")
const routes = require("./routes")
const { createServer } = require("http")
const { Server } = require("socket.io")
const cors = require("cors")
require("dotenv").config()

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


require("./database")

const app = express()

const http = createServer(app) //protocolo http
const io = new Server(http) //protocolo ws

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/client", async (req,res) =>{
  return await res.render("html/client.html")
})

app.get("/admin", async (req,res) =>{
  return await res.render("html/admin.html")
})

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})



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