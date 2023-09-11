import Link from "next/link";
import List from "@/models/list";

export default function ListCard(props: List) {
  const { display_name, list_name_encoded, oldest_published_date, newest_published_date, updated } = props;
  const linkTo: string = `/list/${list_name_encoded}`;
  return (
      <Link href={linkTo}>
        <div className="bg-white rounded-lg shadow-lg p-4 h-48">
          <h1 className="text-black text-xl font-semibold mb-2">{display_name}</h1>
          <div className="text-gray-500 text-sm mb-2">
            <p>Oldest Published Date: {oldest_published_date}</p>
            <p>Newest Published Date: {newest_published_date}</p>
          </div>
          <div className="text-gray-500 text-sm">Updated: {updated}</div>
        </div>
      </Link>
  );
}
