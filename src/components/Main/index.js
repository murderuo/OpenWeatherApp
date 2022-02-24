import React from 'react';
import Input from './Input';
import Table from './Table';
import './index.css';

function Main() {
  return (
    <div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Input />
      </div>
      <br />
      <br />
      <div className="center">
        <Table />
      </div>
      <br />
      <br />

      <br />
      {/* <div>{locationVal}</div> */}
    </div>
  );
}

export default Main;
