module.exports = {
    //获取数据库中所有表名
    SELECT_TABLES: "select table_name from information_schema.tables where table_schema='dhxycharge' and table_type='base table'",
    //获取数据库表中的内容
    SELECT_DATAS: "select * from ",
    //添加表数据的内容
    INSERT_DATAS_ANIME: 'insert into anime(id,person,messages,popstar,address) values(?,?,?,?,?)',
    INSERT_DATAS_MOVIES: 'insert into MOVIES(id,person,messages,popstar,address) values(?,?,?,?,?)',
    INSERT_DATAS_PUBERTYRITE: 'insert into PUBERTYRITE(id,person,messages,popstar,address) values(?,?,?,?,?)',
    INSERT_DATAS_BOSOMFRIEND: 'insert into BOSOMFRIEND(id,person,messages,popstar,address) values(?,?,?,?,?)',
    INSERT_DATAS_CLASSICS: 'insert into CLASSICS(id,person,messages,popstar,address) values(?,?,?,?,?)',
    INSERT_DATAS_RECREATION: 'insert into RECREATION(id,person,messages,popstar,address) values(?,?,?,?,?)',
}