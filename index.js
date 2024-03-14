const express = require('express');
const bicycle = require('./data/data.json');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
    return res.render('bicycles', {
        bicycle
    });

})

app.get('/bicycle', (req, res) => {
    const productId = req.query.id;
    
    if (!productId) {
        return res.status(400).send('Product ID is missing');
    }

    const product = bicycle.find((item) => item.id == productId);

    if (!product) {
        return res.status(404).send('Product not found');
    }

    return res.render('overview', { product });
});

app.listen(7000, () => {
    console.log("Server is Running upto date");
})