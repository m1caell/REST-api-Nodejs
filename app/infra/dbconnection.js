import mysql from 'mysql'
var port = process.env.PORT || 8080;

if (port === 8080) {
    try {
        var connection = mysql.createConnection({
            host: '192.168.64.3',
            port: 3306,
            user: 'admin',
            password: 'm1caell',
            database: 'contas_facil_db',
            insecureAuth: true
        });
    }catch(ex) {
        console.error('Não foi possível se comunicar com o banco de dados');
    }
} else {
   //External connection
}

connection.connect();

export default connection;
