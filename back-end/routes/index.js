var express = require('express');
var router = express.Router();

const mysql = require("mysql");
const config = require("../config");
const connection = mysql.createConnection(config);
connection.connect();

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

router.get("/getTasks", (req,res,next)=>{
  const getTasksQuery = `SELECT * FROM TASKS`
  connection.query(getTasksQuery,(err, results)=>{
    if(err){throw err}
    // console.log(results);
    res.json(results);
  })
})

module.exports = router;
