import express from 'express'
import {Application} from  './src/Application';

const app = express()
const PORT = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send(Application());
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ` || process.env.port)
})