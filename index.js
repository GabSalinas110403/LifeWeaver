var express=require("express");
var path=require("path");
var usuarioRutas=require("./rutas/usuarios")

var app=express();

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname,"/public")));

app.use("/",usuarioRutas);

var port=process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor en http://localhost:${port}`);
}); 