//Import Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const keys = require('./config/keys');

//Import Custom Routes :
const categoryRoute = require('./routes/category');
const questionRoute = require('./routes/question');

//use - Middleware
//Body Parser
//Middle Ware
app.use(express.json());

//Cors Allow Access from Outside
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});

//DB Connection
mongoose
	.connect(keys.mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('DB connection established'))
	.catch((error) => console.log(error));

app.get('/', (req, res) => {
	res.send('Hello Wolrd');
});

//Custom Routes
app.use('/api', categoryRoute);
app.use('/api', questionRoute);

//PORT NUMBER
const PORT = process.env.PORT || 5050;

// git
//Server is Listening at PORT
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
