import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
const app = express()

dotenv.config();


app.use(express.json());    
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
