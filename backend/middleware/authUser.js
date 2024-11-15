import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try {
        const { utoken } = req.headers
        if (!utoken) {
            return res.json({ success: false, message: "Not Authorized.Login Again" })
        }
        const token_decode = jwt.verify(utoken, process.env.JWT_SECRET)
        req.user = { id: token_decode.id }

        next()
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export default authUser

