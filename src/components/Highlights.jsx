import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlight from './ui/highlight'

export default function Highlights() {
  return (
    <section id='highlights'>
        <div className="container">
            <div className="row">
                <h2 className="seciton__title">
                    Why choose <span className='purple'>Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                    icon={<FontAwesomeIcon icon="bolt"/>} 
                    title='Easy & Quick'
                    para="Get access to the book you purchased online instantly"
                    />
                    <Highlight 
                    icon={<FontAwesomeIcon icon="book-open"/>} 
                    title='10,000+ Books'
                    para="Library has books in all your favorite categories"
                    />
                    <Highlight 
                    icon={<FontAwesomeIcon icon="tags"/>} 
                    title='Affordable'
                    para="Get access to the book you purchased online instantly"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
