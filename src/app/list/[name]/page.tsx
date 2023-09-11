import ToggleView from "@/components/toggle-view";
import Book from "@/models/book";

async function getBooks(list_name: string) {
  const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${list_name}.json?api-key=${process.env.API_KEY}`);

  const data = await res.json();

  return data.results.books;
}

export default async function ListPage({ params }: { params: { name: string }}) {
  const books: Book[] = await getBooks(params.name);

  return (
    <div>  
      <ToggleView books={books} /> 
    </div>
)
}
