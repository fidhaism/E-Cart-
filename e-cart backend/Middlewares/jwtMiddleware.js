const jwt = require('jsonwebtoken')

const jwtMiddleware = (res, req, next)=> {
    try{
        const token = req.headers['authorization'].split(7);
        console.log(token);
        const jwtResponse = jwt.verify(token, process.env.JWT_KEY);
        req.payload=jwtResponse.userId
    }
    catch(err){
        res.status(402).json("Authorization Error")
    }
}

module.exports = jwtMiddleware