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
        image: "images/blog/ciambellone.jpeg",
        tags: ["dolci", "colazione"],
    },
     {
        title: "Cracker alla barbabietola",
        content: "ideali come snack o aperitivo",
        image: "images/blog/cracker_barbabietola.jpeg",
        tags: ["snack", "salato"],
    },
     {
        title: "Pane fritto dolce",
        content: "ideale per i più piccini",
        image: "images/blog/pane_fritto_dolce.jpeg",
        tags: ["dolci", "bambini"],
    },
     {
        title: "Pasta alla barbabietola",
        content: "primo piatto alternativo",
        image: "images/blog/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola"],
    },
     {
        title: "Torta paesana",
        content: "dolce tipico della tradizione pugliese",
        image: "images/blog/torta_paesana.jpeg",
        tags: ["dolce", "puglia"],
    },
]

//rotta basic index.js
app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})


//rotta /bacheca che restituisce un obj json con la lista dei post
app.get('/bacheca', (req,res) => {
    res.json(posts); 
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})