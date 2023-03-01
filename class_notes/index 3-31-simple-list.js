import React from 'react';
import ReactDOM from 'react-dom/client';

// ./ same folder
import './index.css';

// Books is an array of items and each item is an object
const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book-1.jpg',
  },
  {
    author: 'Mike Pompeo',
    title: 'Never Give an Inch',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71XS8x7ykIL._AC_UL900_SR900,600_.jpg',
  },
];

const names = ['johns', 'peter', 'paul'];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});

console.log({ newNames });
const BookList = () => {
  return <section className='booklist'>{newNames}</section>;
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

// Destructuring object
const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

// // Destructuring object using function parameters
// const Book = ({ img, title, author }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

// If you pass in a single value, it must be self closing, or pass in <Greeting></Greeting>
root.render(<BookList />);
