import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'; 
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import { URL_IMG, IMG_SIZE_LARGE } from '../constants';

class MovieCards extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    this.props.onShow(id);
  }

  render() {
    const movies = [];    

    this.props.data.forEach(item => {
      const poster = item.poster_path ? URL_IMG+IMG_SIZE_LARGE+item.poster_path : './images/no_poster.jpg';      
      movies.push(
        <Col md={4} key={item.id} className="d-flex">
          <Card border="light" key={item.id}>
            <Card.Link onClick={() => this.handleClick(item.id)}>
              <Card.Img variant="top" className="card-img-height" src={poster} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Rating: {item.popularity}
                  <br />
                  Release: {item.release_date}
                </Card.Text>
              </Card.Body>
            </Card.Link>
          </Card>
        </Col>
      );
    });

    return(    
      <Container> 
        <Row>
          {movies}
        </Row>
      </Container>
    );
  }  
}

export default MovieCards;