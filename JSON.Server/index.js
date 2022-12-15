const express = require('express');
const app = express();
const dados = require('./alunos.json')

app.get('/alunos', (req, res) => {

    return res.json(alunos)
  
 
});


const port = 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});