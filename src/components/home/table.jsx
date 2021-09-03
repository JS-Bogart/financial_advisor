import React, { useState, useEffect } from "react";

const Table = (props) => {

  const tableHeaders = <tr>
    <th className="col-risk">Risk</th>
    <th className="col-bonds">Bonds</th>
    <th className="col-large">Large Cap</th>
    <th className="col-mid">Mid Cap</th>
    <th className="col-foreign">Foreign</th>
    <th className="col-small">Small Cap</th>
  </tr>

  const getTableData = () => {
    return props.tableData.map((row) => {
      const { risk, bonds, largeCap, midCap, foreign, smallCap } = row
      return (
        <tr key={risk}>
          <td>{risk}</td>
          <td>{bonds}</td>
          <td>{largeCap}</td>
          <td>{midCap}</td>
          <td>{foreign}</td>
          <td>{smallCap}</td>
        </tr>
      )
    })
  }

  return(
    <table>
      <tbody>
        {tableHeaders}
        {getTableData()}
      </tbody>
    </table>
  )
}

export default Table;