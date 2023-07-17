var ruta=require("express").Router();

ruta.get("/",(req,res)=>{
    res.render("inicio")
})

ruta.get("/iniciarSesion",(req,res)=>{
    res.render("formIniSes");
})

ruta.get("/crearSesion",(req,res)=>{
    res.render("formCrearSes");
})

ruta.get("/registroExito",(req,res)=>{
    res.render("registroExito");
})

module.exports=ruta;