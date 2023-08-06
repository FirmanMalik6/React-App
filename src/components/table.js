import React from 'react';

const TableComponent = (props) => {
  const { data } = props;
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div class="container mt-4">
      <table class="table table-light table-striped">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{item[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;