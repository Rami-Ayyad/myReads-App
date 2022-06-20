import { useState, useEffect } from 'react';
import './App.css';
import BookShelf from '../../components/BookShelf/BookShelf';
import { getAll } from '../../services/BooksAPI'
import { useBooksContext } from '../../contexts/booksContext'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom'



function App() {

  const allBooks = useBooksContext()
  const shelfs = allBooks
    .map(book => book.shelf)
    .filter((shelf, shelfIndex, shelfsArr) => {
      return shelfsArr.indexOf(shelf) == shelfIndex
    })




  return (
    <div className="app">



      <div className="list-books">

        <div className="list-books-content">
          <div>
            {shelfs.map((shelf, index) => <BookShelf key={index} shelf={shelf} />)}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className='butn' />
        </div>
      </div>

    </div>

  );
}

export default App;
