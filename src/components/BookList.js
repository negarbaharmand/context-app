import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  //1. const context = useContext(ThemeContext);
  //2. Render prop pattern:
  const { books } = useContext(BookContext);

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <div
            className="book-list"
            style={{ color: theme.syntax, background: theme.bg }}
          >
            <ul>
              {books.map((book) => {
                return (
                  <li key={book.id} style={{ background: theme.ui }}>
                    {book.title}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default BookList;
