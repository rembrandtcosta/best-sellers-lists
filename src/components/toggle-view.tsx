'use client';
import Book from "@/models/book";
import { useState } from "react";
import GridView from "./grid-view";
import ListView from "./list-view";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faGrip } from '@fortawesome/free-solid-svg-icons';

export default function ToggleView(props: { books: Book[] }) {
  const [view, setView] = useState<'Grid' | 'List'>('Grid');
  const { books } = props;

  return (
    <div> 
      <div className="flex justify-end items-center"> 
        <button onClick={() => setView('Grid')} className="m-2">
          <FontAwesomeIcon icon={faGrip} size="xl" />
        </button>
        <button onClick={() => setView('List')} className="m-2">
          <FontAwesomeIcon icon={faList} size="xl" />
        </button>
      </div>
      <hr className="mb-2"/>
      { view === 'Grid' ?
      <GridView books={books} /> :
      <ListView books={books}/>
      }
    </div>
  );
}
