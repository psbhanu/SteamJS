var config = config || {};
 
config.development = {
    database: {
        name: 'db_dev_steamjs',
        host: 'localhost',
        port: '27017',
        credentials: '' // username:password@
    },
    smtp: {
        username: "username",
        password: "password",
        host: "smtp.gmail.com",
        port: 587,
        ssl: false
	},
    application: {
        port: 8000,
        cookieKey: '8YQM5GUAtLAT34',
		webConcurrency: 5,
		webConcurrencyDefault: false
    }
};
 
config.production = {    
    database: {
        name: 'db_prod_steamjs',
        host: 'localhost',
        port: '8080',
        credentials: 'admin:password@' // username:password@
    },
    smtp: {
        username: "username",
        password: "password",
        host: "smtp.yourmailserver.com",
        port: 25,
        ssl: false
    },    
    application: {
        port: 80,
        cookieKey: '5SCjWfsTW8ySul',
		webConcurrency: 5,
		webConcurrencyDefault: true
    }    
     
};
 
config.environment = 'development';
 
module.exports = config;