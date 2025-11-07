const db=require('../config/db');

const Funcionario={
  getAll: cb => db.query('SELECT * FROM FUNCIONARIOS',cb),
  create:(data,cb)=>db.query('INSERT INTO FUNCIONARIOS SET ?',data,cb),
  delete:(re,cb)=>db.query('DELETE FROM FUNCIONARIOS WHERE RE=?',[re],cb),
};

module.exports = Funcionario;