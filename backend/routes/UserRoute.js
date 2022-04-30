
const express  = require("express");
const router = express.Router();


router.get("/create/:name/:age", (request, response)=>{
    const name = request.params.name;
    const age = parseInt(request.params.age) * 148;
    response.status(200).json({
        user: name,
        email:"ah26424@gmail",
        age:age,

    })
});

router.post("/testing", (request, response) =>{

    const name = request.body.name;
    const age = parseInt(request.body.age) * 148;
    response.status(200).json({
        user: name,
        email:"ah26424@gmail",
        age:age,

    })
    
})

module.exports = router;