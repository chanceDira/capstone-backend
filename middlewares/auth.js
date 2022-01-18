import jwt from 'jsonwebtoken';

const authentication = async (req , res , next) => {
    const token = req.header('token');
    if(!token) return res.status(401).json({"error" : "Not authorizaed" });
    try {
        const verified = jwt.verify(token , process.env.USER_TOKEN);
        req.userInfo = verified;
        next();
    } catch (error) {
        res.status(401).json({"error":"Access denied , please try again" });
    }
}

export default authentication