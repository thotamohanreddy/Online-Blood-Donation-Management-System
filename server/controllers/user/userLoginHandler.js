
const UserLoginHandler = (app, db) => {
  app.post("/login/usr", (req, res) => {
    //variables
    const userUserName = req.body.userUserName;
    const userPassword = req.body.userPassword;

    //query
    const sqlSelect =
      "SELECT * FROM user_login where userUserName = ? and userPassword =?";
    //
    db.query(sqlSelect,[userUserName,userPassword], (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err);
        console.log("**ERROR**");
      }
      /////
      if (result.length > 0) {
        console.log(result);
        res.send(result);
        console.log("**RESULT SENT TO FRONT END**");
      } else {
        // console.log(result);
        res.send({ message: "wrong username/password combination!" });
        console.log("**INVALID COMBINATION**");
      }
    });
  });
};

export default UserLoginHandler;