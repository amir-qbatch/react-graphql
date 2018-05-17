import React, { Component } from 'react';
import { Button } from 'antd';
import './home/home.css';

import AddBook from "../graphql/mutations/book/addBooks";

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

  handleClick = async () => {
    const { client } = this.props;

    const testingBook = {
      title: "new dummy book",
      author: "qbatch"
    }
    const response = await client.mutate({
      mutation: AddBook,
      variables: testingBook
    })
    const { addBook } = response.data;

    if(addBook) {
      this.setState({book: addBook});
    }
  }

  render() {  

    const { title, author } = this.state.book;
    
    return (
      <div className="home-container">
        <div className="content"> 
          <Button 
            type="primary"
            onClick={() => this.handleClick()}
          >
            Add Book
          </Button>
          <h4>
            {title && title}
          </h4>
          <h4>
            {author && author}
          </h4>
        </div>
      </div>
    )
  }
}
