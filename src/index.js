import React from 'react';
import ReactDOM from 'react-dom/client';

// ./ same folder
import './index.css';
// ES6 Modules
import { books } from './books';
import Book from './Book';

// Booklist component which returns the Book component
// Return cannot have two adjacent elements. The outer parent <></>
// has a child element section
const BookList = () => {
  return (
    <>
      <h1>amaon best sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          // Renders the Book component with book object spread.
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// If you pass in a single value, it must be self closing, or pass in <Greeting></Greeting>
root.render(<BookList />);
