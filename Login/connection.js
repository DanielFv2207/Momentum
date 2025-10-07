let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    database: "usuarios",
    user: "root",
    password: ""
});

connection.connect(function(err){
    if(err){
        throw err;
    } else {
        console.log("successfull connection")
    }
});

const newUser = "INSERT INTO usuarios (id_usuario, correo, contraseña, usuario) VALUES (NULL, '', '', '')";



connection.end();