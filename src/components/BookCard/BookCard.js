import React, { useEffect, useState } from 'react'
import './BookCard.css'
import { useBooksContext } from '../../contexts/booksContext'
import { update } from '../../services/BooksAPI'

//, updateShelf
export default function BookCard({book}) {
    // console.log("bookcard rendered")
    const [selectedShelf, setSelectedShelf] = useState("")
    const [objOfShelfs , setBbjOfShelfs] = useState("")


    const {update, shelf, books} = useBooksContext()
    const [setBook, setSehlf] = update

    function handleClick() {
        if(books.some((apiBook)=> apiBook.id === book.id)){
            console.log(book)
            book["shelf"] = shelf
            console.log(book)
        }
    }

    function handelSelectedShelf(e, book){
        // console.log("select happend")
    //     console.log("from card fun")
    //     updateShelf( book, e.target.value)

        setBook(book)
        // console.log(book)

        setSehlf(e.target.value)
        // console.log(e.target.value)
    }
    

    
    return (
        <ol className="books-grid">
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks?.smallThumbnail})` }}></div>
                        <div onClick={e=>handleClick()} className="book-shelf-changer">
                            <select  onChange={e => handelSelectedShelf(e, book)}>
                                <option selected disabled>Move to...</option>
                                <option value="currentlyReading" >{book.shelf === "currentlyReading"?"✓ Currently Reading":"Currently Reading"}</option>
                                <option value="wantToRead">{book.shelf === "wantToRead"?"✓ Want To Read":"Want To Read"}</option>
                                <option value="read">{book.shelf === "read"?"✓ Read":"Read"}</option>
                                <option  value="none" >None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        </ol>
    )
}
