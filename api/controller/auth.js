const userService = require("../../user_service");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
   const user= await userService.addUser(email, password);
    res.status(201).json({
      message: "Signup successfully",
      user
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user=await userService.authenticate(email, password);
    res.json({
      message: "Login successfully",
      user
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
