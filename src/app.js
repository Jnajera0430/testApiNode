import app from "./index.js";

app.listen(8000,()=>{
    try {
        console.log('server iniciado');
    } catch (error) {
        console.log({
            error,
            message:'error en el server'
        });
    }
})

