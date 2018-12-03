import db from '../../infra/dbconnection';

class GlobalCRUD {
   remove(tableName, id) {
      return new Promise((resolve, reject) => {
         db.query(`DELETE FROM ${tableName} WHERE ID_USUARIO = ${id};`, function (error, results) {
            if(error){      
               return reject(error);
            }
            resolve(results)
         });
      });
   }

   findAll(tableName) {
      return new Promise((resolve, reject) => {
         db.query(`SELECT * FROM ${tableName};`, function (error, results) {
            if(error){      
               return reject(error);
            }
            resolve(results)
         });
      });
   }

   findById(tableName, id) {
      return new Promise((resolve, reject) => {
         db.query(`SELECT * FROM ${tableName} WHERE ID_USUARIO = ${id};`, function (error, results) {
            if(error){      
               return reject(error);
            }
            resolve(results)
         });
      });
   }
}

export default GlobalCRUD;