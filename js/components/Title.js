import React, { Component } from 'react';

const Title = ({text}) => {
  return (
    <div className='container-fluid container-title'>     
      <h1>{text}</h1>
    </div>
  );
}

export default Title;