import db from '../../infra/dbconnection';
import GlobalCRUD from './global-crud';
import { promises } from 'fs';

class UserService extends GlobalCRUD {
   constructor() {
      super();   
      this.tableName = 'USUARIO';
   }

   save(body) {
      let values = [[body.nome], [body.sobrenome], [body.email], [body.senha]];
      let sql = `INSERT INTO ${this.tableName} (nome, sobrenome, email, senha) VALUES(?, ?, ?, ?);`;
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
      let sql = `UPDATE ${id} SET NOME=?, SOBRENOME=?, EMAIL=?, SENHA=? WHERE ID_USUARIO = ${req.params.id};`;
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
}

export default UserService;