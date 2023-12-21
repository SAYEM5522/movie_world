
import { signin, signup } from "../services/userService.js";

export const signupController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await signup(email, password);

    res.status(201).json(newUser);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signinController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signin(email, password);
    if (user) {
      res.status(200).json({ message: "Signin successful", user:user.email });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Invalid credentials" });
  }
};
