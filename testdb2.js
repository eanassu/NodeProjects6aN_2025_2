import mysql from 'mysql2/promise';

try {
    const conn = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'aula'
    })

    const[results,fields] = await conn.execute(
        'SELECT * FROM FUNCIONARIOS WHERE RE=?',
        [3]
    );
    console.log(results);

    const[results1,fields1] = await conn.execute(
        'DELETE FROM FUNCIONARIOS WHERE RE=?',
        [8]
    );
    console.log(results1);
    const[results2,fields2] = await conn.execute(
        'INSERT INTO FUNCIONARIOS VALUES(?,?,?,?)',
        [8,'yyyy','2000-01-01',8000]
    );
    console.log(results2);
    const[results3,fields3] = await conn.execute(
        'UPDATE FUNCIONARIOS SET NOME=?, DATAADMISSAO=?, SALARIO=? WHERE RE=?',
        ['yyyynovo','2025-09-26',8888,8]
    );
    console.log(results3);

} catch(err) {
    console.log(err);
}