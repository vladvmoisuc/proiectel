const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Starting the server on port ${port}`);
});
