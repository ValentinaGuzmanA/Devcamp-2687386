const express=require('express');
const dotenv=require('dotenv');
const colors = require('colors'); 

dotenv.config(
    { 'path' : './config/.env' }
);

app = express()

//RUTAS DE PRUEBA 
app.get('/prueba', (request, response) => {
    response.send('Hola')
});

//RUTAS DE TODOS LOS BOOTCAMPS 

app.get('/bootcamps', (req, res)=>{
    res.json({
        success: true,
        msg: "Se muestran todos los Bootcamps"
    })
});

//id

app.get('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se muestra el bootcamp de id  ${req.params.id}`
    })
});


app.post('/bootcamps', (req, res)=>{
    res.json({
        success: true,
        msg: "se crea el el bootcamp "
    })
});


app.put('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se edita el bootcamp de id  ${req.params.id}`
    })
});

app.delete('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se elimina el bootcamp id  ${req.params.id}`
    })
});
//id


// usuario
app.get('/usuario', (req, res)=>{
    res.json({
        success: true,
        msg: "se muestra  los usuario"
    })
});


app.get('/usuario/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se muestra el usuario  id  ${req.params.id}`
    })
});


app.post('/usuario', (req, res)=>{
    res.json({
        success: true,
        msg: "se crea un usuario"
    })
});


app.put('/usuario/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se edita el usuario  id  ${req.params.id}`
    })
});

app.delete('/usuario/:id', (req, res)=>{
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

app.get('/review/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se muestra la review  id  ${req.params.id}`
    })
});


app.post('/review', (req, res)=>{
    res.json({
        success: true,
        msg: "se crea una review"
    })
});


app.put('/review/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se edita la review  id  ${req.params.id}`
    })
});

app.delete('/review/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se elimina la review id  ${req.params.id}`
    })
});
//cursos
app.get('/cursos', (req, res)=>{
    res.json({
        success: true,
        msg: "se muestran los cursos "
    })
});


app.get('/cursos/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `se muestra el curso  id  ${req.params.id}`
    })
});


app.post('/cursos', (req, res)=>{
    res.json({
        success: true,
        msg: "se crea un curso"
    })
});



app.put('/cursos/:id', (req, res)=>{
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


// app.get('/prueba/:id', (request, response) => {
//     response.send(`Hola, ${request.params.id}`)
// });



app.listen(process.env.PUERTO, () => {
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgGreen.bold)
});

