import "./env";
import MySQL from 'mysql';

export default MySQL.createConnection({
	host : process.env.host,
	user : process.env.user,
	password : process.env.password,
	port : parseInt(process.env.port||''),
	database : process.env.database
});
