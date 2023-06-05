const express = require('express');

const app = express();
const port = 8010; 

app.get('/', (req, res) => res.json(`I'm gonna take you for a ride!`))

app.listen(port, (err) => {
    if(err) throw new Error(`Something went wrong!: ${err}`);
    console.log(`Server listening at http://localhost:${port}`);
})