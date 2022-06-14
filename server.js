const express = require("express");
const path = require("path")

const app = express();
const port = process.env.PORT || 3333;

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Template Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//app.use(bodyParser.urlenconded({ extended: true }))

// Routes

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log("Server is runnig");
    console.log(path.resolve(__dirname, 'index.html'));
})