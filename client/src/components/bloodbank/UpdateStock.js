import Axios from "axios";
import React, { useState, useEffect } from "react";

//css
import "../../assets/css/UpdateStock.css";

const UpdateStock = () => {
  //variables
  const [unitUpdates, setUnitUpdates] = useState({});
  //array of blood unit availbility
  const [bloodTable, setBloodTable] = useState([]);

  //useEffect call
  useEffect(() => {
    Axios.get("http://localhost:3001/login/emp/ub", (req, res) => { }).then(
      (response) => {
        setBloodTable(response.data);
      }
    );
  }, []);
  //updateBloodStock
  // Update Blood Stock
  const updateStock = (b_id, unitChange) => {
    Axios.post("http://localhost:3001/login/emp/ub/update", {
      b_id: b_id,
      unitUpdate: unitChange,
    })
      .then((response) => {
        console.log(response.data);
        setUnitUpdates({ ...unitUpdates, [b_id]: 0 }); // Clear the input field for the specific blood group
        setBloodTable(response.data);
      })
      .catch((error) => {
        console.error("Error updating stock: " + error);
      });
  };
  return (
    <div className="dashboard">
      <h1>UPDATE BLOOD STOCK</h1>

      <table className="update-blood-table">  
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Unit </th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.map((val) => {
            return (
              <tr key={val.b_id}>
                <td>{val.blood_group}</td>
                <td>{val.unit}</td>
                <input
                type="number"
                value={unitUpdates[val.b_id]}
                onChange={(e) => {
                  const updatedUnit = parseInt(e.target.value);
                  setUnitUpdates({ ...unitUpdates, [val.b_id]: updatedUnit });
                }}
              />
              <button onClick={() => updateStock(val.b_id, parseInt(unitUpdates[val.b_id]))}>
                INC
              </button>
              <button onClick={() => updateStock(val.b_id, -parseInt(unitUpdates[val.b_id]))}>
                DEC
              </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UpdateStock;