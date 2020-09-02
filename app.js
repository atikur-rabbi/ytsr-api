const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
const cors = require('cors')
const ytdl = require('ytdl-core')

app.get('/api', (req, res) => {
    res.send('Hello World!')
})


app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
});

module.exports = app

