import { DatabaseConfig } from './config';
import { Cashiers } from './models';

const { Pool } = require('pg');

const pool = new Pool(DatabaseConfig);

export const getAllCashiers = (req: any, res: any) => {
  const query = 'SELECT * FROM cashiers';

  pool.query(query, (err: any, response: { rows: Cashiers[] }) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response.rows);
    }
  });
};

export const getTargetCashiers1 = (req: any, res: any) => {
  const query = `SELECT DISTINCT cashiers.id, name, age, sex, yearsofexperience, 
  shopId, previouswork FROM cashiers, workschedule, shop 
  WHERE workschedule.userid=cashiers.id AND cashiers.shopid=shop.id
  AND shop.city='Львів' AND cashiers.yearsofexperience>=5 
  AND cashiers.previouswork='Arsen' OR cashiers.previouswork='Silpo'`;

  pool.query(query, (err: any, response: { rows: Cashiers[] }) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response.rows);
    }
  });
};

export const getTargetCashiers2 = (req: any, res: any) => {
  const query = `SELECT DISTINCT cashiers.id, name, age, sex, yearsofexperience, shopId, previouswork 
  FROM cashiers, workschedule, shop 
  WHERE workschedule.userid=cashiers.id AND cashiers.shopid=shop.id
  AND shop.shop='ATB' AND shop.address='Шевенка 100' 
  AND workschedule.shift='night' AND workschedule.day='Mon'
  AND workschedule.cashregisternumber%2=1`;

  pool.query(query, (err: any, response: { rows: Cashiers[] }) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response.rows);
    }
  });
};

export const addCashier = (req: { body: Cashiers }, res: any) => {
  const query = `INSERT INTO cashiers ( name, age, sex, yearsOfExperience, shopId, previousWork ) 
  VALUES ($1, $2, $3, $4, $5, $6)`;
  const values = [
    req.body.name,
    req.body.age,
    req.body.sex,
    req.body.yearsofexperience,
    req.body.shopId,
    req.body.previouswork,
  ];

  pool.query(query, values, (err: any, response: any) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response);
    }
  });
};

export const deleteCashier = (req: { body: { id: Number } }, res: any) => {
  const query = 'DELETE FROM cashiers WHERE id=$1;';
  const values = [req.body.id];

  pool.query(query, values, (err: any, response: any) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response);
    }
  });
};
