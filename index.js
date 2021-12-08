const express = require('express');

const userRoutes = require('./routes/userRoutes')

const app = express();

app.get('/', (req, res) => {
  res.send( userRoutes )
});

app.listen(8080, () => {
 console.log('Server running at port 8080')
});