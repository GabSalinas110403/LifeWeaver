var Sequelize = require("sequelize");

module.exports=(conexion)=>{
    const PlantaSchema=conexion.define("planta",{
        id_planta:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre_planta:{
            type:Sequelize.STRING,
        },
        descripcion_planta:{
          type:Sequelize.STRING
        },
        tipo_planta:{
            type:Sequelize.STRING
        },
    });
    return UsuarioSchema;
}