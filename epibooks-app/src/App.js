import React, { useState } from 'react';
import MyNav from './components/navbar/MyNav';
import MyFooter from './components/footer/MyFooter';
import AllTheBooks from './components/allTheBooks/AllTheBooks';
import AlertWelcome from './components/welcome/Welcome';
import CommentArea from './components/commentArea/CommentArea';
import SearchBar from './components/searchBar/Searchbar';
import FantasyBook from './dataBooks/fantasy.json';

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <MyNav />
      <SearchBar allBooks={FantasyBook} setSearchText={setSearchText} />
      <AlertWelcome />
      <AllTheBooks
        allBooks={FantasyBook}
        searchText={searchText}
        setSearchText={setSearchText}
        setSelectedBook={setSelectedBook}
      />
      {selectedBook && <CommentArea bookId={selectedBook} />}
      <MyFooter />
    </>
  );
}

export default App;