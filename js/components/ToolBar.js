import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ToolBar = ({ sortByRate, sortByDate }) => {
  return(    
    <Container>
      <Button variant="light" className="my-3" onClick={() => sortByRate('popularity')}>
        Sort by rate
      </Button>
      <Button variant="light" className="m-3" onClick={() => sortByDate('release_date')}>
        Sort by date
      </Button>
    </Container>
  );
}

export default ToolBar;