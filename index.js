//----------------- SERVIDOR BÁSICO CON NODE.JS ------------------

//const http = require("http");
//const fs = require("fs");

//const server = http.createServer((req, res) => {
//const read = fs.createReadStream("./static/index.html");
//read.pipe(res);
//});

//server.listen(3000);

//console.log(`Server on port ${3000}`);

//------------------ SERVIDOR CON EXPRESS ----------------------
/* 
const express = require("express");

const app = express();


// RUTAS 

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/weather", (req, res) => {
  res.send("the current weather is Nice");
});

app.use((req, res) => {
  res.status(404).send("No se encontro tu pagina");
});

*/

const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  // validate data
  // query a database
  // process data

  res.send("lista de productos");
});

app.post("/products", (req, res) => {
  res.send("creando productos");
});

app.put("/products", (req, res) => {
  res.send("actualizando productos");
});

app.delete("/products", (req, res) => {
  res.send("eliminando productos");
});

app.patch("/products", (req, res) => {
  res.send("actualizando una parte del producto");
});

app.listen(3000);
console.log(`Server on port ${3000}`);