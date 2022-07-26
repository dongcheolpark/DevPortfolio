import "./env";
import MySQL from 'mysql';
import session from 'express-session';
const MySqlStore = require('express-mysql-session')(session);

const option = {
	host: process.env.dbhost,
	user: process.env.dbuser,
	password: process.env.dbpassword,
	port: parseInt(process.env.dbport || ''),
	database: process.env.dbdatabase
}

const sqlConnection = MySQL.createConnection(option);

const mySqlSession = new MySqlStore(option);

declare module 'express-session' {
	export interface SessionData {
		user: {
			id : string,
			pw : string
		};
	}
}

const sessionData = session({
	secret: "SeCrEt",
	resave: false,
	saveUninitialized: true,
	store: mySqlSession
})

export { sqlConnection, sessionData }

export default sqlConnection;
