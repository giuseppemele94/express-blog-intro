const express = require('express');
const app = express();
const port = 3000;


// attivazione della cartella public per uso file statici
app.use(express.static('public'));


//array dei post 
const posts = [
    {
        title: "",
        content: "",
        image: "",
        tags: ["", ""]
    },
     {
        title: "",
        content: "",
        image: "",
        tags: ["", ""]
    },
     {
        title: "",
        content: "",
        image: "",
        tags: ["", ""]
    },
     {
        title: "",
        content: "",
        image: "",
        tags: ["", ""]
    },
     {
        title: "",
        content: "",
        image: "",
        tags: ["", ""]
    },
]

//rotta basic index.js
app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})