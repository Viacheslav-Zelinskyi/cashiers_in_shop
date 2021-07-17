import { port } from './config';
import {
  addCashier,
  deleteCashier,
  getAllCashiers,
  getTargetCashiers1,
  getTargetCashiers2,
} from './db';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('dotenv').config();

app.get('/getAllCashiers', getAllCashiers);

app.get('/getTargetCashiers1', getTargetCashiers1);

app.get('/getTargetCashiers2', getTargetCashiers2);

app.post('/cashiers', addCashier);

app.delete('/cashiers', deleteCashier);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
