import React from 'react'
import BookCard from '../BookCard/BookCard'
import { useBooksContext } from '../../contexts/booksContext'
import './BookShelf.css'
import PropTypes from "prop-types"


export default function BookShelf({ shelf }) {

    const { books: allBooks } = useBooksContext()

    const booksPerShelf = allBooks.filter((book) => {
        return book.shelf === shelf
    })

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">• {shelf} •</h2>
            <div className="bookshelf-books">
                {booksPerShelf.map((bookPerShelf) => {
                    return <BookCard
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


BookShelf.propTypes = {
    shelf: PropTypes.string.isRequired
}