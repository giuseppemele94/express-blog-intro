//creazione di un server che rimane in ascolto sulla porta 3000

//importiamo express
const express = require('express');
//inizializziamo express invocandolo come funzione e salviamo 
//il risultato in una variabile 
const app = express();
const port = 3000;

// cors (Cross-Origin Resource Sharing) serve per evitare il blocco
// delle richieste HTTP quando frontend e backend sono su porte diverse
const cors = require("cors");

// applicoil middleware cors a tutte le rotte dell'applicazione
// cosi da autorizzare le richieste provenienti da porte diverse 
app.use(cors());

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

//avviamo il server mettendolo in ascolto sulla porta indicata 
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})






{/*Test chiamata API a indirizzo http://localhost:3000/bacheca
per controllare che la richeista arrivi al mio server e che il mio server 
rispondi correttamente , con prova di stampa dell'array di obj sia in console log 
che come lista. 
Aggiunta di cors che evita il bloccato delle chiamate quando server e client
sono su due porte diverse.

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]); // DEVE essere un array
  const endpoint = "http://localhost:3000/bacheca";

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res.data);        // { posts: [...] }
        console.log(res.data.posts);  // <-- ARRAY
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Blog</h1>

      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <img
            src={`http://localhost:3000/${post.image}`}
            alt={post.title}
            width="250"
          />
          <p>Tags: {post.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default App; */}
