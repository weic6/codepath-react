import React, { useState, useEffect } from "react";
// import "./List.css";

const List = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [date, setDate] = useState("");
  const [moonphase, setMoonphase] = useState("");

  useEffect(() => {
    setTableData(data);
    setFilteredData(data);
  }, [data]);

  const handleSearch = () => {
    const filterByDate = tableData.filter(
      (item) => item.datetime === (date === "" ? item.datetime : date)
    );
    const filterByPhase = filterByDate.filter(
      (item) => parseFloat(item.moonphase) <= moonphase
    );
    setFilteredData(filterByPhase);
  };
  const moonEmoji = (moonphase) => {
    if (moonphase === 0) {
      return "🌑";
    } else if (moonphase < 0.25) {
      return "🌒";
    } else if (moonphase === 0.25) {
      return "🌓";
    } else if (moonphase < 0.5) {
      return "🌔";
    } else if (moonphase === 0.5) {
      return "🌕";
    } else if (moonphase < 0.75) {
      return "🌖";
    } else if (moonphase === 0.75) {
      return "🌗";
    } else if (moonphase < 1.0) {
      return "🌘";
    } else {
      return "🌑";
    }
  };
  return (
    <div className="List">
      <div className="filters">
        <div className="dateFilter">
          <input
            type="text"
            placeholder="Enter Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="phaseFilter">
          <label>Moon Phase:</label>
          <input
            type="range"
            name="moonphase"
            min="0.0"
            max="1.0"
            step="0.1"
            onChange={(e) => setMoonphase(e.target.value)}
          />
        </div>
        <button className="btn" onClick={() => handleSearch()}>
          Search
        </button>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp</th>
              <th>Time</th>
              <th>Phase</th>
            </tr>
          </thead>
          <tbody>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={"item-" + index}>
                  <td>{item.datetime}</td>
                  <td>{item.feelslikemin + " °F"}</td>
                  <td>{item.moonrise}</td>
                  <td>{moonEmoji(item.moonphase)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td> {"No Data"}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
