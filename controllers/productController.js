const fs = require('fs');
const productsFile = './data/products.json';

const getProducts = (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFile));
    res.json(products);
};

const addProduct = (req, res) => {
    const { name, price } = req.body;
    let products = JSON.parse(fs.readFileSync(productsFile));

    products.push({ name, price });
    fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));

    res.json({ message: 'Produit ajouté avec succès' });
};

module.exports = { getProducts, addProduct };