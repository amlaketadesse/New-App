import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Landing() {
  return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>California's most awarded online library Platform</h1>
                    <h2>Find your dream book with <span className='purple'>Library</span></h2>
                    <Link to="#features">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </header>
    </section>
  )
}