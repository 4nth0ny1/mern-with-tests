module.exports = (req, res) => {
  console.log(req.body);

  // check if password matches
  if (req.body.password === process.env.PASSWORD) {
    res.send("hello login page yes");
  } else {
    res.status(401).send("Wrong Password");
  }
};
