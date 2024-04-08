import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, remove } from "firebase/database";

import TabHead from "../components/TabHead";
import Button from "../components/Button";

function Ac() {

  const [data, setData] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const fetchData = async () => {
      const acRef = ref(db, "ac"); // Assuming 'dlno' is Firebase database node

      try {
        const snapshot = await get(acRef);
        const dataSnapshot = snapshot.val();
        const formattedData = [];

        // Convert dataSnapshot to an array
        Object.keys(dataSnapshot).forEach((acKey) => {
          const acoData = dataSnapshot[acKey];
          // console.log(psoData.team);
          Object.keys(acoData).forEach((key)=>{
            formattedData.push({
              id: key,
              acoID: acKey,
              name: acoData[key].name,
              acName: acoData[key].acName,
              designation: acoData[key].designation,
              mobileNumber: acoData[key].mobileNumber,
            });
          })
        });

        // Update state with formatted data
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (acoID, id) => {
    try {
      // console.log(id);
      await remove(ref(db, `ac/${acoID}/${id}`)); // Remove the item from Firebase
      setData(data.filter((item) => item.id !== id)); // Update state to remove the item from the table
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="contentContainer">
      <TabHead tabHead="Manage AC" />
      <br />
      <Button style="margin-top: 10px" />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>AC Name</th>
              <th>Mobile No.</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.acName}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.designation}</td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(item.acoID, item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M4.75004 15.0417C4.75004 15.4616 4.91686 15.8643 5.21379 16.1613C5.51072 16.4582 5.91345 16.625 6.33337 16.625H12.6667C13.0866 16.625 13.4894 16.4582 13.7863 16.1613C14.0832 15.8643 14.25 15.4616 14.25 15.0417V5.54167H4.75004V15.0417ZM6.33337 7.125H12.6667V15.0417H6.33337V7.125ZM12.2709 3.16667L11.4792 2.375H7.52087L6.72921 3.16667H3.95837V4.75H15.0417V3.16667H12.2709Z"
                        fill="#F0F0F0"
                      />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ac