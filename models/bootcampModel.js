const mongoose =require('mongoose')

//definir Schema Bootcamp

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required:[
            true,
            "Nombre ed requerido"
        ]
    },
    phone:{
        type: Number,
        required:[
            true,
            "Telefono es requerido"
        ],
        maxlength:[
            10, "Telefono no debe de ser mayor s 10 digitos"
        ],
        minlength:[
            7,"Telefono debe de tener al menos 7 dijitos "
        ]
    },
    addres:{
        type: String,
        required:[true,
                "Direccion requerida"
        ]
    },
    topics:{
        type:[String],
        enum:[
            "Backend",
            "Frontend",
            "Devops",
            "AI"

        ]
    },
    createdAt: Date 

})
module.exports =mongoose.model("Bootcamp", 
            BootcampSchema)