// index.js
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
