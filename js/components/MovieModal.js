import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'; 
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { URL_IMG, IMG_SIZE_LARGE } from '../constants';

class MovieModal extends Component { 
  render() { 
    let movie = ''; 

    if (this.props.id !== null) {

      const movieInfo = this.props.data.find(({id}) => id === this.props.id);
      const { title, popularity, poster_path, release_date, overview } = movieInfo;

      movie = 
        <Row>
          <Col className="text-center" md={6}>
            <Image src={URL_IMG+IMG_SIZE_LARGE+poster_path} />
          </Col>
          <Col md={6}>
            <h2>{title}</h2>
            <div className="capture">
              <b>Overview: </b> {overview}
            </div>
            <div className="capture">
              <b>Rating: </b> {popularity} 
              <br />
              <b>Release: </b> {release_date}
            </div>
          </Col>
        </Row>;
    }

    return (
      <Modal
        // animation={false}
        backdropClassName="transition-example-backdrop"
        className="modal-full-screen"
        show={this.props.show}
        onHide={this.props.onHide}
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {movie}
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default MovieModal;