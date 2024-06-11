const users = require('../Models.userSchema')
const jwt = require ('jsonwebtoken')

//Login logic
exports.login = async (req, res) => {
        const { email, password } = req.body    
        try {
        const existingUser = await users.findOne({ email,password })
        if (!existingUser) {
            //jwt token
            return res.status(404).json({ message: "Invalid credentials" })
            }
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id },
                process.env.JWT.KEY, { expiresIn: "1h" })
                res.status(200).json({ result: existingUser, token })
                } catch (error) {
                    res.status(500).json({ message: "Something went wrong" })
                    }
                    }

            
