var express = require('express');
var router = express.Router();

const mysql = require("mysql");
const config = require("../config");
const connection = mysql.createConnection(config);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/addTask", (req, res, next)=>{
  const taskName = req.body.taskName;
  const taskDate = req.body.taskDate;
  const insertQuery = `INSERT INTO tasks(taskName,taskDate)
  VALUES(?,?);`;
  connection.query(insertQuery,[taskName,taskDate],(err,results)=>{
    if(err){throw err}
    const getTasksQuery = `SELECT * FROM TASKS`
    connection.query(getTasksQuery,(err2, results2)=>{
      if(err2){throw err2}
      // console.log(results2);
      res.json(results2);
    })
  })
  // res.json({taskName,taskDate})
});

module.exports = router;
