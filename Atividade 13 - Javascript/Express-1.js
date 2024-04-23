const express = require('express');
const app = express();
app.use(express.json());

let vehicles = [];

app.post('/vehicles', (req, res) => {
    const { modelo, marca, ano, cor, preco } = req.body;

    const id = vehicles.length + 1;
    
    const vehicle = { id, modelo, marca, ano, cor, preco };
    vehicles.push(vehicle);
    
    res.json(vehicle);
});

app.get('/vehicles', (req, res) => {
    res.json(vehicles);
});

app.get('/vehicles/filter', (req, res) => {
    const { marca } = req.query;

    if (!marca) {
        return res.status(400).json({ error: 'Marca não fornecida na consulta' });
    }

    const filteredVehicles = vehicles.filter(vehicle => vehicle.marca.toLowerCase() === marca.toLowerCase());
    res.json(filteredVehicles);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});