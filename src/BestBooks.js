import axios from 'axios';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import UpdateForm from './UpdateForm';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentBook :[]
    }
  }


  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
    .get(`https://book-library-b.herokuapp.com/books`)
    .then(result => {
      console.log(result.data);
      this.setState({
        books: result.data
      })
    })
     .catch(err => console.log(err));
  }
  addBook = (event) => {
    event.preventDefault();
    const obj= {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    }
    axios
    .post(`https://book-library-b.herokuapp.com/books`, obj )   
    .then(result => {
      this.setState({
        books: result.data
      })
    })
    .catch(err => console.log(err));
  } 
  
  deleteBook = (id) => {
    axios
    .delete(`https://book-library-b.herokuapp.com/books/${id}`)
    .then(result => {
      this.setState({
        books: result.data
      })
    })
    .catch(err => console.log(err));
  }
  openForm = (item) => {
    this.setState({
      showFlag : true,
      currentBook : item
    })
    console.log(item);
  }

  handleClose = () =>{
    this.setState({
      showFlag : false
    })
  }
  updateBook = (event) =>{
    event.preventDefault();
    let obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    }
    const id = this.state.currentBook._id;
    axios
    .put(`https://book-library-b.herokuapp.com/books/${id}`, obj)
    .then(result => { 
      this.setState({
        books: result.data
      })
      this.handleClose();
    })
    .catch(err => console.log(err));
  }





/* TODO: render all the books in a Carousel */
  render() {  
    return (
      <>
       <div>
        <form onSubmit={this.addBook}>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <input type="text" placeholder="Book title" name="title" />
        <input type="text" placeholder="Book description" name="description" />
        <input type="text" placeholder="Book status" name="status" />
        <Button variant="primary" type="submit">Add Book</Button>
        </form>
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
          <Button variant="primary" onClick={() => this.deleteBook(Element._id)}>Delete Book</Button>
          <Button variant="primary" onClick={() => this.openForm(Element)}>Update Book</Button>
        </Carousel.Caption>
      </Carousel.Item>
    )
          })
         } </Carousel>) : (
          <h3>Bashar Telfah :(</h3>
        )}
  <UpdateForm
   showFlag={this.state.showFlag}
   handleClose={this.handleClose}
   updateBook={this.updateBook}
   currentBook={this.state.currentBook}
          />
      </div>
          </>
    )
  }
}


export default BestBooks;
