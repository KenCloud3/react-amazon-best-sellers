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
      <EventExamples />
      {books.map((book) => {
        // Renders the Book component with book object spread
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  // reference function
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  // reference function
  const handleButtonClick = () => {
    console.log('handle button click');
  };
  // reference function
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <section>
      // calling reference function
      <form>
        <h1>Typical Form</h1>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        {/* add butoon with type='submit' */}
        <button type='submit'>submit form</button>
      </form>
      {/* Can do it through anonymous function (arrow) */}
      {/* <button onClick={() => console.log('click me 1')} type='button'>
              click me 1
      </button> */}
      {/* Or do it through the event calling a reference function */}
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

// Book component
const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
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
