import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className='header-logo'>
            <h1>MyReads</h1>
        </div>
        <div className='header-tabs'>
            <NavLink  to="/" className='tab' activeClassName="active" >My Shelfs</NavLink>
            <NavLink  to="/search" className='tab' activeClassName="active">Books Search</NavLink>
        </div>
    </header>
  )
}
