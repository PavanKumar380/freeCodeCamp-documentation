const books = [
  {
    title: "White Fang",
    authorName: "Jack London",
    releaseYear: 1906
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1937
  }
];

const sortByYear = (b1, b2) => b1.releaseYear === b2.releaseYear ? 0 : b1.releaseYear > b2.releaseYear ? 1 : -1;

const filteredBooks = books.filter(b => b.releaseYear > 1930);

filteredBooks.sort(sortByYear);