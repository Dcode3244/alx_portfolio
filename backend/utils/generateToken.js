import jwt from "jsonwebtoken"


// takes in user id and generate token that expires in 30 days
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

export default generateToken