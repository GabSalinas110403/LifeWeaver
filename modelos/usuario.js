var Sequelize = require("sequelize");

module.exports=(conexion)=>{
    const UsuarioSchema=conexion.define("usuario",{
        id_usuario:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre_usuario:{
            type:Sequelize.STRING,
        },
        email:{
          type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
    });
    return UsuarioSchema;
}