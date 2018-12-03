import express from 'express';
import morgan from 'morgan';
import { urlencoded, json } from 'body-parser';
const app = express();

app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));
app.use(json());

const port = process.env.PORT || 8080;
import usersRouter from './app/api/controllers/user-route';

// REGISTER ROUTES -------------------------------
app.use('/api/users', usersRouter);

// START THE SERVER using cmd: node server.js
app.listen(port);
console.log('Server avaible on: ' + port);
