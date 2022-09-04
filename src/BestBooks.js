import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }


  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
    .get('http://localhost:3010/book')
    .then(result => {
      console.log(result.data);
      this.setState({
        books: result.data
      })
    })
     .catch(err => console.log(err));
  }

  render() {
    /* TODO: render all the books in a Carousel */
    return (
      <>
      
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (<Carousel>{
          this.state.books.map(Element => {
            return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/6875178.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{Element.title}</h3>
          <p>{Element.description}</p>
          <h3>{Element.status}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    )
          })
         } </Carousel>) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
