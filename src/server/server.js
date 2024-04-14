import express from 'express'
import path from 'path'

export const startServer = (opt) =>{
    const {port, public_path = 'public'} = opt
    const app = express()
    //para usar middelware se usa la palabra use
    app.use(express.static(public_path))
    app.get('*', (req,res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html` )
        res.sendFile(indexPath)
    })
    app.listen(port, ()=>{
        console.log(`escuchando en el puerto ${port}`);
    })
}

