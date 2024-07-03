
import React from 'react';

const DataList = ({ data }) => {
  return (
    <ul>
      {data.map(entry => (
        <li key={entry.id}>
          {entry.date}: {entry.value}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
