import app from './app.js'
const PORT = 5001

app.listen(PORT,
    ()=>{
        console.log(
            `http://localhost:${PORT}`
        )
    })