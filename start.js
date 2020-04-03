const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);


app.use((err, req, res, next) => {
    console.trace(err);
    let status = 500;
    let message = 'Something Bad Happened';
    if (err.httpStatus) {
        status = err.httpStatus;
        message = err.message;
    }
    res.status(status).json({
        error: message,
    });
});


app.listen(3000, () => {
    console.log('The server is listening on 3000 (inside the container) and 3002 outside');
});
