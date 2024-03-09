//instalar dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
// const baseDir = `para cPannel`;
const baseDir = `C:\\Users\\dell user 2\\Documents\\GitHub\\tabu\\`;

const dbURI = 'mongodb+srv://<user>:<pass>@nextcluster.gmdlrli.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then(result => {
        app.listen(port)
        console.log('listening' + String(date.getHours()+1) + ":" + String(date.getMinutes()))
    })

app.use(express.static(baseDir));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(`${baseDir}/index/index.html`)
})