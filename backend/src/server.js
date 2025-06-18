const express = require('express');
const app = express();
const cors = require("cors");
const notesrouter=require("./router/routes");
const { connect } = require('./config/dbconfig.js');
const { default: ratelimiter } = require('./middleware/Ratelimit.js');
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json());
app.use(ratelimiter)
app.use('/api/notes',notesrouter)
const port = process.env.Port || 5000;

connect().then(()=>{
app.listen(port,()=>{
    console.log("server working");

})
});
