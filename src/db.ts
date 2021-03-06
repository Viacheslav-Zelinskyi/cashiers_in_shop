import { DatabaseConfig } from './config';
import { Cashiers, CashRegister, Shop } from './models';

const { Pool } = require('pg');

const pool = new Pool(DatabaseConfig);

export const getAllCashiers = (
  req: { headers: { filterby: String; value: String } },
  res: any,
  toConsole: boolean,
) => {
  const query = 'SELECT * FROM cashiers';

  pool.query(query, (err: any, response: { rows: Cashiers[] }) => {
    if (err) {
      res.send(err.stack);
    } else if (toConsole) {
      console.log('All: ');
      console.log(
        response.rows
          .map((item: any) => (item[`${req.headers.filterby}`] == req.headers.value ? item : null))
          .filter((el) => el != null),
      );
      res.redirect('/target1');
    } else {
      res.send(
        response.rows
          .map((item: any) => (item[`${req.headers.filterby}`] == req.headers.value ? item : null))
          .filter((el) => el != null),
      );
    }
  });
};

export const getTargetCashiers1 = (req: any, res: any, toConsole: boolean) => {
  const query = `SELECT DISTINCT cashiers.id, name, age, sex, yearsofexperience, 
  shopId, previouswork FROM cashiers, workschedule, shop 
  WHERE workschedule.userid=cashiers.id AND cashiers.shopid=shop.id
  AND shop.city='Львів' AND cashiers.yearsofexperience>=5 
  AND cashiers.previouswork='Arsen' OR cashiers.previouswork='Silpo'`;

  pool.query(query, (err: any, response: { rows: Cashiers[] }) => {
    if (err) {
      res.send(err.stack);
    } else if (toConsole) {
      console.log('Target 1: ');
      console.log(response.rows);
      res.redirect('/target2');
    } else res.send(response.rows);
  });
};

export const getTargetCashiers2 = (req: any, res: any, toConsole: boolean) => {
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
      if (toConsole) {
        console.log('Target 2: ');
        console.log(response.rows);
      }
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

export const getShop = (req: any, res: any) => {
  const query = 'SELECT * FROM shop';

  pool.query(query, (err: any, response: { rows: Shop[] }) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response.rows);
    }
  });
};

export const addShop = (req: { body: Shop }, res: any) => {
  const query = 'INSERT INTO shop ( shop, city, address ) VALUES ($1, $2, $3);';
  const values = [req.body.shop, req.body.city, req.body.address];

  pool.query(query, values, (err: any, response: { rows: Shop[] }) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response.rows);
    }
  });
};

export const updateShop = (req: { body: Shop }, res: any) => {
  const query = 'UPDATE shop SET shop=$1, city=$2, address=$3 WHERE id=$4';
  const values = [req.body.shop, req.body.city, req.body.address, req.body.id];

  pool.query(query, values, (err: any, response: { rows: Shop[] }) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response.rows);
    }
  });
};

export const deleteShop = (req: { body: Shop }, res: any) => {
  const query = 'DELETE FROM shop WHERE id=$1';
  const values = [req.body.id];

  pool.query(query, values, (err: any, response: { rows: Shop[] }) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(response.rows);
    }
  });
};

export const getCashRegister = (
  req: { headers: { filterby: String; value: String } },
  res: any,
) => {
  const query = 'SELECT * FROM cashRegister';

  pool.query(query, (err: any, response: { rows: CashRegister[] }) => {
    if (err) {
      res.send(err.stack);
    } else {
      res.send(
        response.rows
          .map((item: any) => (item[`${req.headers.filterby}`] == req.headers.value ? item : null))
          .filter((el) => el != null),
      );
    }
  });
};
