const express = require ('express');
const User = require('./user.model');
const generateToken = require('../middleware/generateToken');
// const verifyToken = require('../middleware/verifyToken')
const router = express.Router();

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
   try {
    const user = await User.findOne({email});
    if (!user){
        return res.status(404).send({message : ' User Not Found'})
    }
    const isMatch  = await user.comparePassword(password);
    if (!isMatch){
        return res.status(401).send({message: "Password Not Matched"})

    }
    const token = await generateToken(user._id);

    res.cookie('token', token,{
        httpOnly: true,
        secure: true,
        sameSite: 'None'
    })
    // console.log(token)
    res.status(200).send({message: "Login In Successfully", token, user:{
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        profileImage: user.profileImage,
        bio: user.bio,
        profession: user.profession

    } })
    
   } catch (error) {
       console.error("Error login", error);
        res.status(500).send({message: "Error logged User"})

   }
})

router.post('/logout', (req, res) =>{
    res.clearCookie('token');
    res.status(200).send({message:'Logged out Successfullly'})
})

router.delete('/users/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).send({message:'User not Found'})
        }
        res.status(200).send({message: 'User Deleted Successfully'})
    } catch (error) {
        console.error("Error deleting user", error);
        res.status(500).send({message: "Error Deleting User"})
    }
})

router.get("/users", async(req, res) =>{
    try {
        const users = await User.find({},'id email role').sort({createdAt: -1});
        res.status(200).send(users)
    } catch (error) {
        console.error("Error fetching users", error);
        res.status(500).send({message: "Error fetching User"})
    }
})

router.put('/users/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const {role} = req.body;
        const user =  await User.findByIdAndUpdate(id, {role}, {new: true});
        if(!user){
            return res.status(404).send({message: 'User Not Found'})
        }
        res.status(200).send({message:'User role updated successfully', user})
    } catch (error) {
        console.error("Error updating role", error);
        res.status(500).send({message: "Error Updating role user."})
    }
})

router.patch('/edit-profile', async (req,res) =>{
    try {
        const {userId, username, profileImage, bio, profession} = req.body;
        if(!userId){
            return res.status(400).send({message: 'User Id is required'})
        }
        const user = await User.findById(userId);
        // console.log(user)
        if(!user){
            return res.status(400).send({message: 'User Not Found'})
        }

        // update profile

        if (username !== undefined) user.username = username;
        if(profileImage !== undefined) user.profileImage = profileImage;
        if(bio!== undefined) user.bio = bio;
        if(profession!== undefined) user.profession = profession;

        await user.save();
        res.status(200).send({
            message: "Profile Updated Succesfully",
            user:{
                _id: user._id,
                email: user.email,
                username: user.username,
                role: user.role,
                profileImage: user.profileImage,
                bio: user.bio,
                profession: user.profession
            },
        });

    } catch (error) {
     
        console.error("Error updating profile", error);
        res.status(500).send({message: "Error Updating profile."})
    }
})


module.exports = router;