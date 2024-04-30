import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNav from './components/navbar/MyNav';
import MyFooter from './components/footer/MyFooter';
import AllTheBooks from './components/allTheBooks/AllTheBooks';
import AlertWelcome from './components/welcome/Welcome';
import CommentArea from './components/commentArea/CommentArea';
import SearchBar from './components/searchBar/Searchbar';
import FantasyBook from './dataBooks/fantasy.json';
import NotFound from './components/notFound/NotFound';
import BookDetails from './components/bookDetails/BookDetails';

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <BrowserRouter>
      <MyNav />
      <SearchBar allBooks={FantasyBook} setSearchText={setSearchText} />
      <AlertWelcome />
      <Routes>
        <Route path="/" element={<AllTheBooks allBooks={FantasyBook} searchText={searchText} setSearchText={setSearchText} setSelectedBook={setSelectedBook} />} />
        <Route path="/book/:asin" element={<CommentArea />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;