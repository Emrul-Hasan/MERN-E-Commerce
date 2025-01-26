const express = require ('express');
const User = require('./user.model');
const router = express.Router();

// router.get ("/", async (req, res) =>{
//     res.send("Registration Routers")
// })


router.post('/register', async (req, res) =>{
    try{
        const {username,email,password} = req.body;
        const user = new User({username,email,password});
        await user.save();
        res.status(201).send({message: "User Register Successfully !"})
        console.log(req.body)
    }
    catch(error){
        console.error("Error registering user", error);
        res.status(500).send({message: "Error registering User"})

    }
})


router.post('/login', async(req,res) =>{
    const {email,password} = req.body;
    console.log(email,password)

})



module.exports = router;