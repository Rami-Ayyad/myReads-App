import React from "react";
import { useContext, useState, useEffect } from "react";

import { getAll, update } from "../services/BooksAPI";

const BooksContext = React.createContext()

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const [book, setBook] = useState("")
    const [shelf, setShelf] = useState({})


    useEffect(() => {
        update(book, shelf).then(()=>getAll()).then((books) => { setBooks(books) })

    }, [shelf,book])

    useEffect(() => {
        getAll()
        .then((books) => { setBooks(books) })

    }, [])

    return (
        <BooksContext.Provider value={{ books, update: [setBook, setShelf], shelf }}>
            {children}
        </BooksContext.Provider>
    )
}

export function useBooksContext() {
    return useContext(BooksContext)
}