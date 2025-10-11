import express from 'express';
import cors from 'cors';
import connection from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

//ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.json({ message: 'Todos los campos son obligatorios' });
    }

    const sql = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';
    connection.query(sql, [username, email, password], (err) => {
    if (err) {
        console.error('Error al insertar usuario:', err);
        return res.json({ message: 'Error al registrar el usuario' });
    }
    res.json({ message: 'Usuario registrado con éxito ' });
    });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));


