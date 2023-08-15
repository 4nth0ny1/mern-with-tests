module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send("invalid credentials");
  } else {
    const token = authHeader.split(" ")[1];
    console.log(token);
  }
};
