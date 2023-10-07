const app = require("./app");
require('dotenv').config();

//servidor
const PORT= process.env.PORT ?? 8000

//escuchando a mi servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})


module.exports= server
