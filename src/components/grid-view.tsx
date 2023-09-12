import Book from "@/models/book";
import BookCard from "./book-card";

export default function GridView(props: { books: Book[] }) {
  const { books } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
     {books.map((book, index) => (<BookCard key={index} mode='Grid' {...book} />))}
    </div>
  );
}
