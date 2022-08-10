const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

const fs = require('fs');
const port = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({  extended : true }))



app.get('/', (req, res) => {
    res.send('API Called')
})

// app.post('/add-to-cart', async (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
//  })

// app.post('/cart', async(req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// })

// app.get('/cart/id', async(req, res) => {
//     console.log(req.params.id)
//     res.send(req.params.id)
// })

app.get('/getItems', async(req, res) => {
    fs.readFile("items.json", function(err, data) {
        if (err) throw err;
        const items = JSON.parse(data);
        console.log(items);
        res.send(items);
    });
})

// app.delete("/deleteItems/:id", async (req, res) => {
//     console.log(req.params.id)
//     res.send(req.params.id)
// })

async function run() {

}

app.listen(port, async() => {
    run().catch(console.dir);

    console.log(`App is runing on ${port}`)

})
