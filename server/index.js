import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
// middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }))
// run
app.get('/', async (req, res) => {
    res.send('Hello from DALL-E')
})
// start server
const startServer = async () => {
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
}

startServer()