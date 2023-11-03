const express = require('express')
const BootcampModel =require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')
//definir el ruteador 

const router =express.Router()

router.get('/',async (req, res)=>{
    //utilizar el modelo para seleccionar todos  los bootcamps en la bd 
    const bootcamps=
    await BootcampModel.find()
    res.json({
        success: true,
        data: bootcamps
    })
})

//id

router.get('/:id', async (req, res)=>{
bootcampId =req.params.id
    const bootcamp=
        await bootcampModel.findById(bootcampId)
    
res.json({
        success: true,
        data:bootcamp
    })
})


router.post('/', async(req, res)=>{

    const newBootcamp=
         await BootcampModel.create(req.body)

    res.json({
        success: true,
        data: newBootcamp
    })
})

router.put('/:id', async (req, res )=>{
    //el nuevo bootcamp vendra de body
    //
    const bootcampId=req.params.id
    const upBootcamp=
    await bootcampModel.
    findByIdAndUpdate(
        bootcampId,
        req.body,
        {
            new: true
        })
    res.json({
        success: true,
        data:upBootcamp
    })
})

/*router.delete('/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `aqui se elimina el bootcamp id  ${req.params.id}`
    })
})*/
router.delete('/:id', async (req, res )=>{
    //el nuevo bootcamp vendra de body
    //
    const bootcampId=req.params.id
    const upBootcamp=
    await bootcampModel.
    findByIdAndDelete(
        bootcampId,
        {
            new: true
        })
    res.json({
        success: true,
        data:delBootcamp
    })
})

module.exports = router