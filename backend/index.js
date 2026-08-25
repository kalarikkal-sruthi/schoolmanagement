
const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config();
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')

const adminRoutes = require("./routes/adminRoutes");
const app = express();

connectDB()
app.use(
    cors({
       origin: "http://localhost:5173"
    })
);
app.use(express.json());

app.get('/',(req,res)=>{
    res.json('School Management API is running');
});
app.use("/api/auth",authRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
 console.log(`the server running app like ${PORT}`);
 
})

