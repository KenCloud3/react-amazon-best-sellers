import React from 'react';
import ReactDOM from 'react-dom/client';

// ./ same folder
import './index.css';

const firstBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-1.jpg',
};

const secondBook = {
  author: 'Mike Pompeo',
  title: 'Never Give an Inch',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71XS8x7ykIL._AC_UL900_SR900,600_.jpg',
};

// // deconstruct secondBook
// console.log(secondBook.author);
// const { title, img } = secondBook;
// console.log(title);

// Create BookList component which calls Book component
// React component is like a JS funtion()
// Starts with capital
// Must return JSX (html)
const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

// // Orig version
// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className='book'>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// // Destructuring object
// const Book = (props) => {
//   console.log(props);
//   const { img, title, author } = props;
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// Destructuring object using function parameters
const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// If you pass in a single value, it must be self closing, or pass in <Greeting></Greeting>
root.render(<BookList />);
