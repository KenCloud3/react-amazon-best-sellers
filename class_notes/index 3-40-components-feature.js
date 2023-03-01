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
    id: 1,
  },
  {
    author: 'Mike Pompeo',
    title: 'Never Give an Inch',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71XS8x7ykIL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];

// Booklist component which returns the Book component
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // Renders the Book component with book object spread
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

// Book component
const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* Button is for each specific item, the funcionality is specific */}
      <button onClick={displayTitle}>display title</button>display title
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// If you pass in a single value, it must be self closing, or pass in <Greeting></Greeting>
root.render(<BookList />);
