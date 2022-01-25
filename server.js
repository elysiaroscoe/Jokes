const express = require("express");
const app = express();
const PORT = 8000;

//middleware
app.use(express.json(),express.urlencoded({extended:true}));

//1. connect mongodb by requiring file here
require("./config/mongoose.config");
//2. create mongoose schema
//3. use mongoose model to make CRUD (in controller)
//4. create routes to execute functions to db
require("./Routes/jokes.routes")(app);

app.listen(PORT, () => console.log(`server is running on ${PORT}`))