const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({   // 현재 이 파일이 mysql의 데이터에 접근할 수 있도록 연결
  localhost: 'localhost',
  user: 'shop',
  password: '123456',
  database: 'shop'
});

// Read
router.get('/', (req, res, next) => {
  let sql = 'SELECT * FROM products';   // SELECT * FROM something - something의 모든 데이터를 읽어온다.
  connection.query(sql, (err, r) => {
    res.render()
  });
})

// Create
router.get('/insert', (req, res, next) => {
  let sql = 'INSERT INTO products SET id=?, username=?, content=?';
  // INSERT INTO something SET some1, some2 ... - something의 some1, some2에 어떠한 데이터를 넣을 것이다.
  let values = [id, username, content];   // 그 some1 some2에 해당하는 데이터(value)
  connection.query(sql, values, (err, r) =>{
    res.json(r);
  });
});

// Delete
router.get('/remove/:id', (req, res, next) => {
  let id = req.params.id;   // request의 인자 중 id값
  let sql = 'DELETE FROM products WHERE id=?';    // DELETE FROM something WHERE some1 - something 테이블 안의 some1에 해당하는 데이터를 지운다.
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

module.exports = router;    // module로 만들어서 다른 파일에서 불러다 쓸 수 있음