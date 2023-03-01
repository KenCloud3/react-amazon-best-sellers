import React from 'react';
import ReactDOM from 'react-dom/client';

// ./ same folder
import './index.css';

// Create first component
// React component is like a JS funtion()
// Starts with capital
// Must return JSX (html)
// Always close tag </h2>
// Export it away from file

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

// Only pass in a expression, not a statement
// Expression returns (expresses) a value:
// Statements are individual instructions that runtime will execute:
// <p>{6 + 6}</p> //  Yes!
// <p>{let x = 4}</p> //  NO!

const author = 'James Clear';
const Book = () => {
  const title = 'Atomic Habits';
  return (
    <article className='book'>
      <img src='./images/book-1.jpg' alt='Atomic Habits' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// If you pass in a single value, it must be self closing, or pass in <Greeting></Greeting>
root.render(<BookList />);
