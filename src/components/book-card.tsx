import Book from "@/models/book";
import Image from "next/image";

interface BookCardProps extends Book {
  mode: 'List' | 'Grid';
}

export default function BookCard(props: BookCardProps) {
  const { title, author, publisher, book_image, rank, weeks_on_list, description, amazon_product_url, mode } = props;

  return (
    <div className={`${mode==='Grid' ? 'max-w-xs' : 'max-w-4xl'} rounded-lg overflow-hidden shadow-lg bg-white`}>
      <Image src={book_image} alt={title} className="w-full h-48 object-cover object-center" />
      <div className="px-6 py-4">
        <div className="text-black font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-600 text-sm">{author}</div>
        <div className="text-gray-600 text-sm mt-2">
          <p>Rank: {rank}</p>
          <p>Weeks on List: {weeks_on_list}</p>
          <p>Publisher: {publisher}</p>
        </div>
        <p className="text-gray-700 text-base mt-4">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={amazon_product_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View on Amazon
        </a>
      </div>
    </div>
  );
}
