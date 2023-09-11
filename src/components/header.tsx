import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4">
      <hr />
      <div className="container">
        <Link href="/" className="text-white text-xl font-semibold">
          New York Times Best Sellers List
        </Link>
      </div>
      <hr />
    </header>
  );
};

export default Header;
