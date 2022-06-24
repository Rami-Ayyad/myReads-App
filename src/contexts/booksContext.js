import React from "react";
import { useContext, useState, useEffect } from "react";

import { getAll, update } from "../services/BooksAPI";

const BooksContext = React.createContext()

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const [book, setBook] = useState("")
    const [shelf, setShelf] = useState({})
    const [renderer, setRenderer] = useState(0)

    // console.log("%c context renderd", "color: green")

    useEffect(() => {
        // console.log("%c api update", "background:yellow;color:red")
        update(book, shelf).then(()=>getAll()).then((books) => { setBooks(books) })


    }, [shelf,book])

    useEffect(() => {
        // console.log("%c api call", "background:yellow;color:red")

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