import React from 'react';

function String({ strings }) {
  return (
    <ul>
      {strings.map((string, index) => (
        <li key={index}>{string}</li>
      ))}
    </ul>
  );
}

export default String