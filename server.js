require('babel-register');

const express = require('express');
const executeSsr = require('./dist/server/server').default;

const app = express();

app.use('/dist', express.static('dist/client'));
app.get('/*', executeSsr);

const port = process.env.PORT || 1234;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${port}...`);
});
