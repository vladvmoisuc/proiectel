const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', routes);

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(port, () => {
  console.log(`Starting the server on port ${port}`);
});
