import "./env";
import MySQL from 'mysql';

export default MySQL.createConnection({
	host : process.env.dbhost,
	user : process.env.dbuser,
	password : process.env.dbpassword,
	port : parseInt(process.env.dbport||''),
	database : process.env.dbdatabase
});
