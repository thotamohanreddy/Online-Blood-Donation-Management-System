//module export
const UpdateStockHandler = (app, db) => {
  app.get("/login/emp/ub", (req, res) => {
    //query
    const sqlSelect = "SELECT * FROM blood_stocks;";

    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });

  app.post("/login/emp/ub/update", (req, res) => {
    //variables
    const unitUpdate = req.body.unitUpdate;
    const b_id = req.body.b_id;
    //query
    const sqlUpdate = "UPDATE blood_stocks SET unit = unit + ? WHERE b_id= ?;";
    db.query(sqlUpdate, [unitUpdate, b_id], (err, result) => {
      if (err) {
        console.log("**ERROR IN UPDATING UNIT VALUE**" + err);
        res.status(500).send("Error updating unit value");
      } else {
        // Send the updated data as the response
        const sqlSelect = "SELECT * FROM blood_stocks;";
        db.query(sqlSelect, (err, updatedResult) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error fetching updated data");
          } else {
            console.log(updatedResult);
            res.send(updatedResult);
          }
        });
      }
    });
  });

};

export default UpdateStockHandler;