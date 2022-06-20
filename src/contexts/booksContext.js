import React from "react";
import { useContext, useState, useEffect } from "react";

import { getAll } from "../services/BooksAPI";

const BooksContext = React.createContext()

export function BooksProvider({children}) {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        getAll()
        .then((books)=>{setBooks(books)})
    },[])

    return(
        <BooksContext.Provider value={books}>
            {children}
        </BooksContext.Provider>
    )
}

export function useBooksContext() {
    return useContext(BooksContext)
}