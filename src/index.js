import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/pages/home/App';
import { BooksProvider } from './contexts/booksContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/search/Search';
import Header from './components/Header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BooksProvider>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='search' element={<Search />} />

        </Routes>
      </BrowserRouter>

    </BooksProvider>
  // </React.StrictMode> 
);

