import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import prisma from './services/prisma.js';
import userRoutes from './routes/user.routes.js';


dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api/users', userRoutes);


app.get('/api/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({
      status: 'ok',
      message: 'WorkWay API is running',
      database: 'connected'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Database connection failed',
      error: error.message
    });
  }
});

app.listen(PORT,()=> {
    console.log(`SERVER is running on http://localhost:${PORT}`);

});

