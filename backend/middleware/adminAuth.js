import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers;
        if (!token) {
            return res.json({ success:false, message: "Unauthorized access" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success:false, message: "Forbidden: Admin access required" });
        }

        // Attach user info to request object
        // req.user = decoded;

        next();
        
    } catch (error) {
        console.error("Admin authentication error:", error);
        return res.json({ message: "Internal server error" });
    }
}

export default adminAuth;