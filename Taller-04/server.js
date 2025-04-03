const express = require('express');
const app = express();
app.use(express.json()); 

const PORT = 3000;

// Cargar datos 
const users = require('./24-taller-04-datos.json');

// 1
app.get('/users/hobby', (req, res) => {
    const hobby = req.query.hobby;
    if (!hobby) return res.status(400).json({ error: 'El parámetro "hobby" es requerido.' });

    const filteredUsers = users.filter(user => 
        user.hobbies && user.hobbies.includes(hobby.toLowerCase())
    );
    res.json(filteredUsers);
});

// 2
app.get('/users/exists', (req, res) => {
    const codigo = req.query.codigo;
    if (!codigo) return res.status(400).json({ error: 'El parámetro "codigo" es requerido.' });

    const exists = users.some(user => user.codigo === codigo);
    res.json({ exists });
});

// 3
app.get('/users/hobby/count', (req, res) => {
    const hobby = req.query.hobby;
    if (!hobby) return res.status(400).json({ error: 'El parámetro "hobby" es requerido.' });

    const count = users.filter(user => 
        user.hobbies && user.hobbies.includes(hobby.toLowerCase())
    ).length;
    res.json({ hobby, count });
});

// 4
app.get('/users/is-free', (req, res) => {
    const usersWithFreeTime = users.filter(user => 
        user.hobbies && user.hobbies.length < 3
    );
    res.json(usersWithFreeTime);
});

// 5
app.post('/users/suggest', (req, res) => {
    const { codigo, hobby } = req.body;
    if (!codigo || !hobby) return res.status(400).json({ error: 'Los campos "codigo" y "hobby" son requeridos.' });

    const user = users.find(user => user.codigo === codigo);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' });

    if (user.hobbies && user.hobbies.length >= 3) {
        return res.status(400).json({ error: 'El usuario ya tiene 3 hobbies. No se puede agregar más.' });
    }

    if (!user.hobbies) user.hobbies = [];
    if (!user.hobbies.includes(hobby)) user.hobbies.push(hobby);

    res.json({
        message: 'Hobby agregado exitosamente.',
        user
    });
});

// 6
app.post('/users', (req, res) => {
    const { codigo, nombre, apellido, hobbies } = req.body;
    
    if (!codigo || !nombre || !apellido || !hobbies) {
        return res.status(400).json({ error: 'Todos los campos (codigo, nombre, apellido, hobbies) son requeridos.' });
    }

    if (hobbies.length < 2) {
        return res.status(400).json({ error: 'El usuario debe tener al menos 2 hobbies.' });
    }

    const usuarioExistente = users.find(user => user.codigo === codigo);
    if (usuarioExistente) {
        return res.status(400).json({ error: 'El código ya está registrado.' });
    }

    const nuevoUsuario = { codigo, nombre, apellido, hobbies };
    users.push(nuevoUsuario);

    res.status(201).json({
        message: 'Usuario registrado exitosamente.',
        usuario: nuevoUsuario
    });
});

// servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});