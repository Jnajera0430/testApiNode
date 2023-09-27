import express from "express";
import taskRouter from "./routes/taskRouter.js";

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send('hola mundo');
});


//routes
app.use('/tasks',taskRouter);

export default app;