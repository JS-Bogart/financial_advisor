import React, { useState, useEffect } from "react";
import Table from "./table";

const Home = (props) => {

  const [selectRisk, setSelectedRisk] = useState(null);
  const [dataDisplay, setDataDisplay] = useState("table");

  const getTable = () => {
    return(
      <Table tableData={props.tableData}/>
    )
  }

  return(
    <div>
      <header>
        <h1>Financial Advisor</h1>
      </header>
      <div>
        {getTable()}
      </div>
    </div>
  )
}

export default Home;