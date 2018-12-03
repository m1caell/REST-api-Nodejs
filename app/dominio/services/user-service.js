import db from '../../infra/dbconnection';
import GlobalCRUD from './global-crud';

class UserService extends GlobalCRUD {
   constructor() {
      super();   
      this.tableName = 'USUARIO';
   }

   save(body) {
      let values = [[body.nome], [body.sobrenome], [body.email], [body.senha]];
      let sql = `INSERT INTO ${this.tableName} (NOME, SOBRENOME, EMAIL, SENHA) VALUES(?, ?, ?, ?);`;
      return new Promise((resolve, reject) => {
         db.query(sql, values, function (error, result) {
            if (error) {
               console.log(error);
               reject(error)
            } else {
               resolve(result);
            }
         });
      })
   }

   update(body, id) {
      let values = [[body.nome], [body.sobrenome], [body.email], [body.senha]];
      let sql = `UPDATE ${this.tableName} SET NOME=?, SOBRENOME=?, EMAIL=?, SENHA=? WHERE ID_USUARIO = ${id};`;
      return new Promise((resolve, reject) => {
         db.query(sql, values, function (error, result) {
            if (error) {
               reject(error)
            } else {
               resolve(result);
            }
         });
      })
   }
}

export default UserService;