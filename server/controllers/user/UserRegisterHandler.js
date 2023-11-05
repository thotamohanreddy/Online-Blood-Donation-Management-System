const UserRegisterHandler = (app, db) => {
  app.post("/reg/usr", (req, res) => {
    
    const userFName = req.body.userFName;
    const userAge = req.body.userAge;
    const userGender = req.body.userGender;
    const userBloodGroup = req.body.userBloodGroup;
    const userPhone = req.body.userPhone;
    const userMail = req.body.userMail;
    const userPlace = req.body.userPlace;
    const userUserName = req.body.userUserName;
    const userPassword = req.body.userPassword;
    const confirmPassword = req.body.confirmPassword;

   
    const sqlInsert1 =
      "INSERT INTO user_details (userFName,userAge,userGender,userBloodGroup,userPhone,userMail,userPlace) VALUES (?,?,?,?,?,?,?)";

    const sqlInsert2 =
      "INSERT INTO user_login (user_id,userUserName,userPassword) VALUES (?,?,?)";

    const sqlInsert3 = "INSERT INTO user_health (user_id) VALUES(?)";

    const sqlDelete1 = "DELETE  FROM user_details WHERE user_id= ?";

    const sqlDelete2 = "DELETE FROM user_health WHERE user_id=?";
  
    db.query(
      sqlInsert1,
      [
        userFName,
        userAge,
        userGender,
        userBloodGroup,
        userPhone,
        userMail,
        userPlace,
      ],
      (err, result) => {
        if (err) console.log(err + " **ERROR  INSERTING USER** ");
        else {
          var user_id = result.insertId;
          db.query(
            sqlInsert2,
            [user_id, userUserName, userPassword],
            (err, result1) => {
              if (err) {
                console.log(err + "**ERROR INSERTING TO USER-LOGIN**");
                db.query(sqlDelete1, [user_id], (err, result2) => {
                  if (err) console.log(err);
                  else {
                    console.log("**DELETED DUE TO DUPLICATION**");
                    res.status(400).json({ success: false, message: "Username already exists" });
                  }
                });
              } else {
                db.query(sqlInsert3, [user_id], (err, result1) => {
                  if (err) {
                    console.log(err + "**ERROR INSERTING TO USER-LOGIN**");
                    db.query(sqlDelete2, [user_id], (err, result2) => {
                      if (err) console.log(err);
                      else {
                        console.log("**DELETED DUE TO DUPLICATION**");
                        res.status(400).json({ success: false, message: "Username already exists" });
                      }
                    });
                  } else {
                    res.status(200).json({ success: true, message: "User registration successful" });
                  }
                });
              }
            }
          );
        }
      }
    );
  });
};


export default UserRegisterHandler;