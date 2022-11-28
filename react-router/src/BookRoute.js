import React from "react";
import { Routes, Route } from "react-router-dom";
import Booklist from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from "./BookLayout";

const BookRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<Booklist />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>
      </Routes>
    </div>
  );
};

export default BookRoute;
