import React, {useState} from 'react'
import BookCard from '../BookCard/BookCard'
import { useBooksContext } from '../../contexts/booksContext'
import './BookShelf.css'
import { update } from '../../services/BooksAPI'
import { createRenderer } from 'react-dom/test-utils'


// , updateShelf  updateShelf={updateShelf}
export default function BookShelf({shelf}) {
    // console.log("%c shelf rendered","background:yellow;color:red")
    // const [updatedBooks, setUpdatedBooks] = useState([])

    const {books:allBooks} = useBooksContext()
    // console.log(allBooks)
  
    const booksPerShelf = allBooks.filter((book) => {
            return book.shelf === shelf
        })

    // function updateShelf(book, shelf) {
    //     console.log("from shelf fun")
    //     update(book, shelf).then((res)=>setUpdatedBooks([...updatedBooks,res]))

        
    // }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">• {shelf} •</h2>
            <div className="bookshelf-books">
                {booksPerShelf.map((bookPerShelf) => 
                        {return <BookCard 
                                key={bookPerShelf.id} 
                                shelf={shelf} 
                                book={bookPerShelf} 
                                
                                /> 
                        }
                        )}
              
            </div>
        </div>
    )
}
