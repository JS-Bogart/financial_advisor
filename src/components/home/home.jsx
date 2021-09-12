import React, { useState, useEffect } from "react";
import Table from "./table";

const Home = (props) => {

  const [selectedRisk, setSelectedRisk] = useState(null);
  const [dataDisplay, setDataDisplay] = useState("table");
  const riskRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getTable = () => {
    return(
      <Table tableData={props.tableData} selectedRisk={selectedRisk}/>
    )
  }

  const getDataButton = () => {
    return(
      (dataDisplay === "table") ?
        <button onClick={() => setDataDisplay("pie-graph")}>Pie Graph</button>
      :
        <button onClick={() => setDataDisplay("table")}>Table</button>
    )
  }

  const buttonHighlight = (risk) => {
    return(
      (risk === selectedRisk) ?
        "risk-button-hl" : "risk-button"
    )
  }

  return(
    <div>
      <header>
        <h1>Financial Advisor</h1>
      </header>
      <div>
        <h3>Please Select A Risk Level For Your Investment Portfolio</h3>
        <div>
          <p>Low</p>
          <p>High</p>
        </div>
        <div className="risk-buttons-container">{riskRange.map(risk => (
          <button 
            key={risk}
            className={buttonHighlight(risk)}
            onClick={() => setSelectedRisk(risk)}
          >
            {risk}
          </button>
        ))}</div>
      </div>
      <div>
        <div>
          {getTable()}
        </div>
        {getDataButton()}
      </div>
    </div>
  )
}

export default Home;