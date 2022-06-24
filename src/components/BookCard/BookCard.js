import React from 'react'
import './BookCard.css'
import { useBooksContext } from '../../contexts/booksContext'



export default function BookCard({book}) {

    const {update} = useBooksContext()
    const [setBook, setSehlf] = update

    function handelSelectedShelf(e, book){
        setBook(book)
        setSehlf(e.target.value)
    }
    

    return (
        <ol className="books-grid">
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks?.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
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
