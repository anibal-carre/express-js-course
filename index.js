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


// ------------------------- RUTAS -------------------------- 

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

/*
// ------------------ PETICIONES HTTP: GET, POST, PUT , DELETE Y PATCH -----------------------

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
*/

/*

// ------------------- RESPUESTAS DEL SERVIDOR ---------------

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/miarchivo", (req, res) => {
  //sendFile se usa para cargar un archivo como respuesta
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "David",
    lastname: "Carreno",
    age: 20,
    points: [1, 2, 3],
    address: {
      city: "new york",
      street: "street 445",
    },
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
}); */

//----------------- RECIBIR DATOS DEL CLIENTE ---------------------

/*
const express = require("express");

const app = express();

//Para que el servidor pueda entender los datos de tipo 'Text' enviados por el cliente
app.use(express.text());
//Para que el servidor pueda entender los datos de tipo 'Json' enviados por el cliente
app.use(express.json());
//Para que el servidor pueda entender los datos enviados por el cliente atraves de un formulario
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  // console.log(req.body);  asi se puede usar la información que el cliente envio
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

*/

//------------- PARAMETROS DE LA URL --------------------

const express = require("express");

const app = express();

app.get("/hello/:user", (req, res) => {
  console.log(typeof req.params.user);
  res.send(`Hello ${req.params.user.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  //console.log(req.params.x);
  //console.log(req.params.y);

  // ESTA ES UNA MEJOR FORMA DE OBTENER LOS DATOS DE LOS PARAMETROS , USANDO LA DESESTRUCTURACIÓN

  const { x, y } = req.params;

  const result = parseInt(x) + parseInt(y);
  //const result = parseInt(req.params.x) + parseInt(req.params.y);
  console.log(result);
  res.send(`Result: ${result}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "david") {
    return res.sendFile("./javascript.png", {
      root: __dirname,
    });
  }

  res.send("el usuario no tiene acceso");
});

app.get("/nombre/:nombre/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
