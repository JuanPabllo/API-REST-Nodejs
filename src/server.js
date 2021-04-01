const express = require('express');
const app = express();

app.use('/', require('./routes/postRoutes'));

app.listen(3000);
