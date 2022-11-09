require('dotenv').config();
const express = require("express");
const cors = require('cors');
const port = process.env.PORT || 8000;
const connect = require('./configs/dbConfig')
const userRoute = require('./features/userProfile/user.route')
const authRoute = require('./features/auth/auth.route')



const app = express();

app.use(cors())
app.use(express.json())
app.use('/user', userRoute)
app.use('/user/auth', authRoute)


app.listen(port, async () => {
    await connect();
    console.log(`listening on http://localhost:${port}`);
})
