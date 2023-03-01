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

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src='./images/book-1.jpg' alt='Atomic Habits' />;
const Title = () => <h2>Atomic Habits</h2>; // Implicit return

// Provide a JS Object within the second set of curly brackets. They are inline styles
// const Author = () => {
//   return (
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//       James Clear
//     </h4>
//   );
//};

// This example we create the object and then pass the reference for the style. color: 'hex'. Hex is a string
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  // Explicit return
  return <h4 style={inlineHeadingStyles}>James Clear</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// If you pass in a single value, it must be self closing, or pass in <Greeting></Greeting>
root.render(<BookList />);
