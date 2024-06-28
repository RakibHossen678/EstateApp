import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  //HASH THE PASSWORD
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    //CREATE A USER AND SEND IT TO THE DATABASE
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(200).json({ message: "User created Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user" });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //check if the use exist
    const user = await prisma.user.findUnique({
      where: { username },
    });
    //check it the password is correct
    //generate cookie token send to the user
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login" });
  }
};
export const logout = (req, res) => {
  //db operation
};
