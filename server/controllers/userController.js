const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.addUser = async (req, res) => {
    try {
        const { firstName, lastName, email, contact, grade, state, city, school, password, pincode } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8);
        console.log("Password Hashed");

        const exsistingEmail = await userModel.findOne({ email: email });
        if (exsistingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const exsistingContact = await userModel.findOne({ contact: contact });
        if (exsistingContact) {
            return res.status(400).json({ message: "Contact already exists" });
        }

        const user = await userModel.create({firstName, lastName, email, contact, grade, state, city, school, password: hashedPassword, pincode});
        
        res.status(201).json({ message: 'User created successfully', user });
    } catch(err){
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const exsistingUser = await userModel.findOne({email: email});4
        if (!exsistingUser) {
            return res.status(400).json({ message: "Email does not exist" });
        }

        const isMatched = await bcrypt.compare(password, exsistingUser.password);

        if(isMatched){
            res.status(200).json({ message: 'User logged in successfully', user: exsistingUser});
        } else {
            return res.status(400).json({ message: "Invalid Password" });
        }
    } catch(err) {
        console.log(err);
    }
}