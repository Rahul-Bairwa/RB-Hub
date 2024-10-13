require('./config');
require('dotenv').config();
const express =require('express');
const cors =require('cors');
const app =express();
const port = 4444;
app.use(express.json());
app.use(cors());
app.use('/api/users',require('./Routes/auth'));
app.use('/api/products',require('./Routes/products'));
app.use('/api/category',require('./Routes/category'));

app.listen(port,()=>console.log(`server is running on http://localhost:${port}`));