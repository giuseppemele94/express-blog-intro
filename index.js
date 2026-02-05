const express = require('express');
const app = express();
const port = 3000;


// attivazione della cartella public per uso file statici
app.use(express.static('public'));


//array dei post 
const posts = [
    {
        title: "Ciambellone",
        content: "un classico della colazione italiana",
        image: "",
        tags: ["dolci", "colazione"]
    },
     {
        title: "Cracker alla barbabietola",
        content: "ideali come snack o aperitivo",
        image: "",
        tags: ["snack", "salato"]
    },
     {
        title: "Pane fritto dolce",
        content: "ideale per i più piccini",
        image: "",
        tags: ["dolci", "bambini"]
    },
     {
        title: "Pasta alla barbabietola",
        content: "primo piatto alternativo",
        image: "",
        tags: ["pasta", "barbabietola"]
    },
     {
        title: "Torta paesana",
        content: "dolce tipico della tradizione pugliese",
        image: "",
        tags: ["dolce", "puglia"]
    },
]

//rotta basic index.js
app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})