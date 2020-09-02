const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
const cors = require('cors')
const ytdl = require('ytdl-core')
const ytsr = require('ytsr');
let filter;
ytsr.do_warn_deprecate = false;

app.get('/api', (req, res) => {
    res.send('Hello World!')
})

app.get("/search/:id", function (req, res) {
    //  res.send(req.method);
    //  res.send(req.path);
    //  res.send(req.params.id);
    //  res.send(req.params);
    let search_word = req.params.id;
    ytsr(search_word, function (err, searchResults) {
        if (err) throw err;
        // let result = (JSON.stringify(searchResults))
        res.send(searchResults);
    })
});app.get("/channel/:id", function (req, res) {

      res.send(req.params);

});
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
});

module.exports = app