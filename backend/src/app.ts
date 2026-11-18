import express from 'express'


const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())


app.get("/api/health", (req, res)=> {

    res.json({"message": "OK"})
})



const PORT = 3000;
app.listen(PORT, ()=>{
    `Server is running at http://localhost:${PORT}`
})




