var express = require('express');
var router = express.Router();
var query = require("../demojs/index");
var sql = require("../demojs/sql");
/* GET users listing. */
router.post('/addevery/anime', function(req, res, next) {
    let { person, messages, popstar, address } = req.body;
    let id = Math.floor(Math.random() * 9000) + 1000;
    query(sql.INSERT_DATAS_ANIME, [id, person, messages, popstar, address], (err, files) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        res.send({ code: 1, msg: "添加成功" })
    })
});

router.post('/addevery/movies', function(req, res, next) {
    let { person, messages, popstar, address } = req.body;
    let id = Math.floor(Math.random() * 9000) + 1000;
    query(sql.INSERT_DATAS_MOVIES, [id, person, messages, popstar, address], (err, files) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        res.send({ code: 1, msg: "添加成功" })
    })
});
router.post('/addevery/pubertyrite', function(req, res, next) {
    let { person, messages, popstar, address } = req.body;
    let id = Math.floor(Math.random() * 9000) + 1000;
    query(sql.INSERT_DATAS_PUBERTYRITE, [id, person, messages, popstar, address], (err, files) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        res.send({ code: 1, msg: "添加成功" })
    })
});
router.post('/addevery/bosomfriend', function(req, res, next) {
    let { person, messages, popstar, address } = req.body;
    let id = Math.floor(Math.random() * 9000) + 1000;
    query(sql.INSERT_DATAS_BOSOMFRIEND, [id, person, messages, popstar, address], (err, files) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        res.send({ code: 1, msg: "添加成功" })
    })
});
router.post('/addevery/classics', function(req, res, next) {
    let { person, messages, popstar, address } = req.body;
    let id = Math.floor(Math.random() * 9000) + 1000;
    query(sql.INSERT_DATAS_CLASSICS, [id, person, messages, popstar, address], (err, files) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        res.send({ code: 1, msg: "添加成功" })
    })
});
router.post('/addevery/recreation', function(req, res, next) {
    let { person, messages, popstar, address } = req.body;
    let id = Math.floor(Math.random() * 9000) + 1000;
    query(sql.INSERT_DATAS_RECREATION, [id, person, messages, popstar, address], (err, files) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        res.send({ code: 1, msg: "添加成功" })
    })
});
module.exports = router;