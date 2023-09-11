import Book from "@/models/book";
import BookCard from "./book-card";

export default function ListView(props: { books: Book[] }) {
  const { books }  = props;

  return (
    <div className="grid grid-cols-1 gap-2">
     {books.map((book) => (<BookCard mode='List' {...book} />))}
    </div>
  );
}
