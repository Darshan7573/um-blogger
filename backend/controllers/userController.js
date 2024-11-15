import bcrypt from 'bcryptjs'
import userMondel from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import validator from 'validator'

const registerUser = async (req, res) => {
    try {

        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Enter the valid email' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            username, email, password: hashedPassword
        }

        const newUser = new userMondel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ success: true, token })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export { registerUser }