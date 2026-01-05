import bcrypt from 'bcrypt'
import cookiparser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import express from 'express'

export const JWT = express()

const users = [
 {
    id: 1,
    username: "moshe",
    password: "djcsjcskjejffjeprfe.3r4rjdlkjeiwehcwiedi302#@#Dwevcjdshsdcsc", // Hashed
    role: "admin",
    email: "moshe@gmail.com"
  },
]

JWT.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    async(u) => u.username === username && 
await bcrypt.compare(password, u.password)
  )

  if (!user){
     return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign(
    {
      username: user.username,
      role: user.role,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
res.cookie("token", token, {httpOnly: true, sameSite: true})
  res.send({ success: true});
});

export function verifyToken(req, res, next) {
    
    
  const token = req.cookies["token"]
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded
    next();
  })
}
         
