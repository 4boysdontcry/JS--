const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  localhost: 'localhost',
  user: 'shop',
  password: '123456',
  database: 'shop'
});

// Read
router.get('/', (req, res, next) => {
  let sql = 'SELECT * FROM products';
  connection.query(sql, (err, r) => {
    res.render()
  });
})

// Create
router.get('/insert', (req, res, next) => {
  let sql = 'INSERT INTO products SET id=?, username=?, content=?';
  let values = [id, username, content];
  connection.query(sql, values, (err, r) =>{
    res.json(r);
  });
});

// Delete
router.get('/remove/:id', (req, res, next) => {
  let id = req.params.id;
  let sql = 'DELETE FROM products WHERE id=?';
  let values = [id];
  connection.query(sql, values, (err, r) => {
    res.json(r);
  });
});

// Update
router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  let sql = 
})