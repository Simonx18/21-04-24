import React, { useState } from 'react';
import MyNav from './components/navbar/MyNav';
import MyFooter from './components/footer/MyFooter';
import AllTheBooks from './components/allTheBooks/AllTheBooks';
import AlertWelcome from './components/welcome/Welcome';
import CommentArea from './components/commentArea/CommentArea';
import CommentList from './components/commentArea/CommentList';
import FantasyBook from './dataBooks/fantasy.json';
import SearchBar from './components/searchBar/Searchbar';
import SingleComment from './components/singleComment/SingleComment';

function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <MyNav />
      <SearchBar allBooks={FantasyBook} setBooks={() => {}} booksStart={FantasyBook} setSearchText={setSearchText} />
      <AlertWelcome />
      <AllTheBooks allBooks={FantasyBook} searchText={searchText} setSearchText={setSearchText} />
      <CommentList />
      <CommentArea />
      <MyFooter />
      <SingleComment />
    </>
  );
}

export default App;