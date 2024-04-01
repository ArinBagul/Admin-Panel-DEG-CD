import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, remove } from "firebase/database";

import TabHead from "../components/TabHead";
import Button from "../components/Button";

import "./styles/tabContent.css";
import "./styles/table.css";

// Change data from 140 Agar PS
const Ps = () => {
  const [data, setData] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const fetchData = async () => {
      const psRef = ref(db, "ps"); // Assuming 'ps' is your Firebase database node

      try {
        const snapshot = await get(psRef);
        const dataSnapshot = snapshot.val();
        const formattedData = [];

        // Convert dataSnapshot to an array
        Object.keys(dataSnapshot).forEach((district) => {
          const booths = dataSnapshot[district];
          Object.keys(booths).forEach((boothNumber) => {
            const boothData = booths[boothNumber];
            formattedData.push({
              district: district,
              boothNumber: boothNumber,
              boothName: boothData.boothName,
              boothAd: boothData.boothAd,
            });
          });
        });

        // Update state with formatted data
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [db]);

  const handleDelete = async (district, boothNumber) => {
    try {
      const boothRef = ref(db, `ps/${district}/${boothNumber}`);
      await remove(boothRef); // Remove the booth entry from Firebase
      setData((prevData) => {
        // Filter out the deleted booth entry from the data array
        return prevData.filter(
          (item) =>
            !(item.district === district && item.boothNumber === boothNumber)
        );
      });
    } catch (error) {
      console.error("Error deleting booth:", error);
    }
  };

  return (
    <div className="contentContainer">
      <TabHead tabHead="Manage Polling Stations" />
      <br />
      <Button style="margin-top: 10px" />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>AC</th>
              <th>Booth No.</th>
              <th>Booth Name</th>
              <th>Booth Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.district}</td>
                <td>{item.boothNumber}</td>
                <td>{item.boothName}</td>
                <td>{item.boothAd}</td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() =>
                      handleDelete(item.district, item.boothNumber)
                    }
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
  );
};

export default Ps;
