import bcrypt from "bcryptjs"


const users =[
    {
        name:"Admin user",
        email:"admin@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true

    },
    {
        name:"Lucky",
        email:"lucky@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:false

    },
    {
        name:"Lucy",
        email:"lucy@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:false

    },
    {
        name:"Rish",
        email:"rish@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:false

    }
]

export default users