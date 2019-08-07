import React, { Component } from 'react';
import Title from './components/Title';
import MovieCards from './components/MovieCards';
import MovieModal from './components/MovieModal';
import ToolBar from './components/ToolBar';
import { dateString } from './utils/date.js';
import * as constants from './constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isModal: false,     
      id: null,
      data: [],
      sorted: []      
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.sortByRate = this.sortByRate.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  handleClose() {
    this.setState({ 
      isModal: false 
    });
  }

  handleShow(id) {
    this.setState({ 
      isModal: true,
      id: id
    });
  }

  sortByDate(date) {
    const sortFn = (a, b) => {
      if (a[date] === b[date]) return 0;
      return a[date] > b[date] ? 1 : -1;
    };

    const sorted = [...this.state.data].sort(sortFn);

    this.setState({ 
      sorted: sorted
    });
  }

  sortByRate() {
    this.setState({ 
      sorted: this.state.data
    });
  }

 
  componentDidMount() {   
    const url = constants.UPCOMING + dateString;
    fetch(url)
    .then(res => res.json())
    .then(json => json.results)
    .then(data => {
      this.setState({
        data: data,
        sorted: data,
        isLoaded: true        
      })
    }); 
  }

  render() {
     if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (           
        <div>  
          <Title 
            text='Upcoming Movies'
          /> 
          <ToolBar 
            sortByDate={this.sortByDate} 
            sortByRate={this.sortByRate}
          />
          <MovieCards 
            data={this.state.sorted}    
            onShow={this.handleShow}
          />
          <MovieModal
            data={this.state.data} 
            id={this.state.id}
            show={this.state.isModal} 
            onHide={this.handleClose}
          />
        </div>
      );
    }    
  }
}
