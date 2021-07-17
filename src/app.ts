import { port } from './config';
import {
  addCashier,
  addShop,
  deleteCashier,
  deleteShop,
  getAllCashiers,
  getCashRegister,
  getShop,
  getTargetCashiers1,
  getTargetCashiers2,
  updateShop,
} from './db';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('dotenv').config();

app.get('/', (req: any, res: any) => {
  getAllCashiers(req, res, true);
});
app.get('/target1', (req: any, res: any) => {
  getTargetCashiers1(req, res, true);
});
app.get('/target2', (req: any, res: any) => {
  getTargetCashiers2(req, res, true);
});

app.get('/cashiers', getAllCashiers);
app.get('/cashiers/getTargetCashiers1', getTargetCashiers1);
app.get('/cashiers/getTargetCashiers2', getTargetCashiers2);
app.post('/cashiers', addCashier);
app.delete('/cashiers', deleteCashier);

app.get('/shop', getShop);
app.post('/shop', addShop);
app.delete('/shop', deleteShop);
app.patch('/shop', updateShop);

app.get('/cashRegister', getCashRegister);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
