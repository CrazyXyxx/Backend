// src/controllers/apiController.js
const testEndpoint = (req, res) => {
  res.json({ message: 'Endpoint de test fonctionnel' });
};

module.exports = { testEndpoint };