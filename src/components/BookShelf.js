import React from 'react'
import BookCard from './BookCard'

export default function BookShelf({title}) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookCard/>
            </div>
        </div>
    )
}
