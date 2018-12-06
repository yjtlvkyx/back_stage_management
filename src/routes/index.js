var express = require('express');
let query = require("../demojs/index");
var router = express.Router();
var mysql = require("mysql");
//配置sql语句
const sql = require("../demojs/sql");

//整个数据库接口，初步任务为探查其中多少个表
router.get("/all/tables", (req, res, next) => {
    query(sql.SELECT_TABLES, [], (err, datas) => {
        res.send({ code: 1, msg: "此处无任务" })
    })
});

//内容列表，这里是娱乐项目的品种表,以及其他表的名
router.get("/every/amusetypes", (req, res, next) => {
        query(sql.SELECT_DATAS + 'amusetypes', [], (err, datas) => {
            if (err) {
                console.log(err);
                res.end("错误报告")
            } else {
                res.send({ datas })
            };
        })
    })
    //这里是各个娱乐种类的接口
router.get("/every/anime", (req, res, next) => {
    query(sql.SELECT_DATAS + 'anime', [], (err, datas) => {
        if (err) {
            console.log(err);
            res.end("错误报告")
        } else {
            res.send({ datas })
        };
    })
})
router.get("/every/movies", (req, res, next) => {
    query(sql.SELECT_DATAS + 'movies', [], (err, datas) => {
        if (err) {
            console.log(err);
            res.end("错误报告")
        } else {
            res.send({ datas })
        };
    })
})
router.get("/every/pubertyrite", (req, res, next) => {
    query(sql.SELECT_DATAS + 'pubertyrite', [], (err, datas) => {
        if (err) {
            console.log(err);
            res.end("错误报告")
        } else {
            res.send({ datas })
        };
    })
})
router.get("/every/bosomfriend", (req, res, next) => {
    query(sql.SELECT_DATAS + 'bosomfriend', [], (err, datas) => {
        if (err) {
            console.log(err);
            res.end("错误报告")
        } else {
            res.send({ datas })
        };
    })
})
router.get("/every/classics", (req, res, next) => {
    query(sql.SELECT_DATAS + 'classics', [], (err, datas) => {
        if (err) {
            console.log(err);
            res.end("错误报告")
        } else {
            res.send({ datas })
        };
    })
})
router.get("/every/recreation", (req, res, next) => {
    query(sql.SELECT_DATAS + 'recreation', [], (err, datas) => {
        if (err) {
            console.log(err);
            res.end("错误报告")
        } else {
            res.send({ datas })
        };
    })
})
module.exports = router;