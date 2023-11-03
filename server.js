const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')
//dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')

//VINCULAR ARCHIVO env
dotenv.config(
{ path : './config/.env' }
)

//CONECTAR A BASE DE DATOS

conectarDB()

//construir objeto base de datos
const app=express()

app.use(express.json())

//conectar las rutas
//al objeto
app.use('/api/v1/devcamp/bootcamps',
    bootcampRoutes)

//RUTAS DE PRUEBAS
app.get('/prueba/:id', (req,  res) =>{
    res.send(`Hola, ${req.params.id}`)
})

app.listen(process.env.PUERTO,() =>{
    console.log(`servidor en ejecucion: `+process.env.PUERTO.bgCyan)
   
   
})

// usuario
app.get('/users', (req, res)=>{
    res.json({
        success: true,
        msg: "se muestra  los usuario"
    })
});


app.get('/users/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se muestra el usuario  id  ${req.params.id}`
    })
});


app.post('/users', (req, res)=>{
    res.json({
        success: true,
        msg: "se crea un usuario"
    })
});


app.put('/users/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se edita el usuario  id  ${req.params.id}`
    })
});

app.delete('/users/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se elimina el usuario  id  ${req.params.id}`
    })
});


//Rreviwews
app.get('/reviews', (req, res)=>{
    res.json({
        success: true,
        msg: "se muestran  las reviews"
    })
});

app.get('/reviews/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se muestra la review  id  ${req.params.id}`
    })
});


app.post('/reviews', (req, res)=>{
    res.json({
        success: true,
        msg: "se crea una review"
    })
});


app.put('/reviews/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se edita la review  id  ${req.params.id}`
    })
});

app.delete('/reviews/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se elimina la review id  ${req.params.id}`
    })
});
//cursos
app.get('/courses', (req, res)=>{
    res.json({
        success: true,
        msg: "se muestran los cursos "
    })
});


app.get('/courses/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se muestra el curso  id  ${req.params.id}`
    })
});


app.post('/courses', (req, res)=>{
    res.json({
        success: true,
        msg: "se crea un curso"
    })
});



app.put('/courses/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se edita el curso  id  ${req.params.id}`
    })
});


app.delete('/cursos/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se elimina el curso  id  ${req.params.id}`
    })
});