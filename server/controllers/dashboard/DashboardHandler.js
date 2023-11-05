
const DashboardHandler = (app, db) => {
  app.get("/home", (req, res) => {
    //query
    const sqlSelect = "SELECT * from blood_stocks;";

    //db search
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.log("Error fetching blood stocks");
      } else {
        res.send(result);
      }
    });
  });
};

export default DashboardHandler;