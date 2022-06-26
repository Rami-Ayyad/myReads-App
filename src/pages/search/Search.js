import React, { useEffect, useState } from 'react'
import { useBooksContext } from '../../contexts/booksContext'
import './Search.css'
import { search } from '../../services/BooksAPI'
import BookCard from '../../components/BookCard/BookCard'

export default function Search() {
    const [searchInput, setSearchIput ] = useState("")
    const [searchedBooks, setSearchedBooks] = useState([])
    // console.log(searchedBooks)

    const {books} = useBooksContext()

    const booksIds = books.map((apiBook)=>apiBook.id)
    // console.log(booksIds)

    useEffect(() => {
        search(searchInput).then((res) =>{
            if(Array.isArray(res) && searchInput) {
                let filterd = res.filter((book)=>!booksIds.includes(book.id))
                console.log(filterd)
                
                    setSearchedBooks([...filterd,...books])
               
            }
            else{
                setSearchedBooks([])
            }
        })
    },[searchInput])

    
    return (
        <div>

            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" >Close</button>
                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author"
                            value={searchInput}
                            onChange={(e)=>setSearchIput(e.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks.map((book) => <li key={book.id}> <BookCard  book={book}/> </li>)}
                    </ol>
                </div>
            </div>

        </div>
    )
}
