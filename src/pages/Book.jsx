import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'antd';
import './home/home.css';

import AddBook from "../graphql/mutations/book/books";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        title: '',
        author: ''
      }
    }
  }

  handleClick = async (AddBook) => {
    const testingBook = {
      title: "new book",
      author: "qbatch"
    }
    const data = await AddBook({ variables: testingBook });
    if(data) {
      this.setState({book: data.data.addBook});
    }
  }

  render() {  
    const { title, author } = this.state.book;
    return (
      <Mutation mutation={AddBook}> 
      {(AddBook, { data }) => (
        <div className="home-container">
          <div className="content"> 
            <Button 
              type="primary"
              onClick={() => this.handleClick(AddBook)}
            >
              Add Book
            </Button>
            <h1>
              {title && title}
            </h1>
            <h1>
              {author && author}
            </h1>
          </div>
        </div>
      )}
      </Mutation>
    )
  }
}
