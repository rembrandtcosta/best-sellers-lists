import Image from 'next/image'
import ListCard from '@/components/list-card';
import List from '@/models/list';

async function getLists() {
  const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.API_KEY}`);

  const data = await res.json();
  
  return data.results;
}

export default async function Home() {
  const lists: any[] = await getLists();

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lists.map((list, index) => (<ListCard key={index} {...list} />))}
      </div>
    </main>
  )
}
