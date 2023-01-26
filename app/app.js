// ENV
require('dotenv').config();

// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3600;

// Static File Service
app.use(express.static('public'));

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node의 native Promise 사용
//sequelize.Promise = global.Promise;

// Connect to MySQL
const { sequelize } = require('./models');

sequelize.sync({ force: false })
	.then(() => {
		console.log('데이터베이스 연결 성공');
	})
	.catch((error) => {
		console.error(error);
	});

// ROUTERS
//app.use('/', require('./routes/'));

app.listen(port, () => console.log(`Server listening on port ${port}`));