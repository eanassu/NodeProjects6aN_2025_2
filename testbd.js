const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'aula'
});

conn.connect(
    function(err) {
        if (err) throw err;
        console.log('conectado!');
        conn.query('SELECT * FROM FUNCIONARIOS',
            function(err, result, fields) {
                if(err) throw err;
                console.log(result);
                console.log(fields);
            }
        );
        conn.query('SELECT * FROM FUNCIONARIOS WHERE RE=3',
            function(err, result, fields) {
                if(err) throw err;
                console.log(result);
            }
        );
        re = 7;
        nome = "wwww',null,null);drop table teste;INSERT INTO FUNCIONARIOS VALUES(8,'eeee";
        dataAdmissao = '2020-01-01';
        salario = 7000;
        sql = "INSERT INTO FUNCIONARIOS VALUES(" + 
            re +",'"+ nome +"','"+dataAdmissao+"',"+salario+")",
        console.log(sql);

        conn.query( sql, 
            function(err, result, fields) {
                if(err) throw err;
                console.log(result);
            }
        );

    }
);
