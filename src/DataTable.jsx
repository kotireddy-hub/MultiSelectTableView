import React, { useState, useCallback, useMemo } from "react";
import { useAppContext } from "./AppContext";

function DataTable() {
  const { data } = useAppContext();

  return (
    <table border="1">
      <thead>
        <tr>
          <th>groupingName</th>
          <th>grouping</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.label}</td>
            <td>{row.options}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
