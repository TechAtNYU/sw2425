import User from "../models/user.model.js";

//GET ALL USERS
export const getUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({success:true, data:users});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:"server error"})
    }
}

export const createUser = async (req, res)=>{
    const user = req.body;//user-sent data
    //validate that req.body has all the necessary fields
    if(!user.name){
        return res.status(400).json({success:false, message: "Please provide all required fields"})
    }
    //use the json body that was passed in as a req and stored as 'user' in the above lines
    const newUser = new User(user); 

    try {
        await newUser.save();
        res.status(201).json({success:true, data:newUser});
    } catch (error) {
        console.error("error in Creating user:", error.message);
        res.status(500).json({success:false, message:"server error"});
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"user not found"})
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, {new:true})
        res.status(200).json({success:true, data:updatedUser})
    } catch (error) {
        res.status(500).json({success:false, message:"server error"})
    }
}

export const deleteUser = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false, message:"User not found"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"user deleted successfully"});
    } catch (error) {
        res.status(500).json({success:false, message:"Server error"});
    }

}

export const getOneUser = async (req, res) => {
    const {id} = req.params;
    try {
        const users = await User.findById(id);
        res.status(200).json({success:true, data:users});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:"server error"})
    }
}


