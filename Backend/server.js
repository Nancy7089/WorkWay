import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health',(req,res) => {
    res.status(200).json({status: 'ok', message: 'WorkWay apu is running'});
});

app.get('/api/user-test', (req, res) => {
  res.json({ name: 'Nancy', role: 'Developer' });
});


app.listen(PORT,()=> {
    console.log(`SERVER is running on http://localhost:${PORT}`);

});

