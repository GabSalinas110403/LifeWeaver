var Sequelize = require("sequelize");

module.exports=(conexion)=>{
    const CuidadoSchema=conexion.define("cuidado",{
        id_cuidado:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        riego:{
            type:Sequelize.STRING,
        },
        luz:{
          type:Sequelize.STRING
        },
        temperatura:{
            type:Sequelize.STRING
        },
        humedad:{
            type:Sequelize.STRING
        },
        suelo:{
            type:Sequelize.STRING
        },
    });
    return UsuarioSchema;
}