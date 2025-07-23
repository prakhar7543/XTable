import "./table.css";
import React, { useEffect, useState } from "react";

let dummyData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function Table() {
  let [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(dummyData);
    // console.log(tableData);
  }, []);

  let handleDateClick = () => {
    let sortedData = [...tableData].sort(
      (a, b) => {
        let dateDiff = new Date(b.date) - new Date(a.date)

        if(dateDiff === 0){
            return b.views - a.views;
        }

        return dateDiff;
    });
    setTableData(sortedData);
    console.log(sortedData);
  };

  let handleViewsClick = () => {
    let sortedViews = [...tableData].sort((a, b) => {
        let viewsDiff = b.views - a.views;

        if(viewsDiff === 0){
            return new Date(b.date) - new Date(a.date);
        }

        return viewsDiff;
    })

    setTableData(sortedViews);
  };

  return (
    <div className="container">
      <div className="tableContainer">
        <h1>Date and Views Table</h1>
        <div className="btn">
          <button onClick={handleDateClick}>Sort by Date</button>
          <button onClick={handleViewsClick}>Sort by Views</button>
        </div>
        <div >
          <table className="table">
            <thead>

            <tr className="dataHeader">
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
            </thead>

            <tbody>

            {tableData &&
              tableData.map((data, index) => (
                <tr className="dataRows" key={index}>
                  <td className="date">{data.date}</td>
                  <td className="views">{data.views}</td>
                  <td className="article">{data.article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
