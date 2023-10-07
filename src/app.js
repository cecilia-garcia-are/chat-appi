//IMPORTACIONES
const express = require('express'); //cjs - common java script
const morgan = require('morgan');
const cors = require('cors');
const path = require("node:path");
const apiv1Routes = require('./routes/apiv1.routes');
const errorRoutes = require('./routes/error.routes');

//MI EXPRESS
const app = express()


//MIS APP.USE
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.use("/avatar", express.static(path.join(__dirname, "../public")))


app.get('/', (req, res) => {
    res.send('Ok')
})



//rutas
apiv1Routes(app)

//los middlewares de error siempre se ejecutan despues de todas nuestras rutas
errorRoutes(app)




module.exports= app