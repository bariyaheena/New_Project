const express = require('express');

require('dotenv').config();
const app = express();
require('./database/mongo');

const port = process.env.PORT;  


const userRoute = require('./routes/userRouts');
const studentRoute = require('./routes/studentRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRoute);
app.use('/api/user', studentRoute);

app.listen(port, () => {
    console.log(`server is runnig on ${port}`);
});