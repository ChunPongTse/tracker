const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://junkuser:junk12345@nodeexpress-jwt-test.ojchbel.mongodb.net/todoscollections";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true   }
    );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// import routes
const todoRouter = require('./routes/todos');

// adding /todos to before all routes
app.use('/todos', todoRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
