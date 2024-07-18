'use client';
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = [
	{ id: 1, name: 'Home', href: '/' },
	{ id: 2, name: 'Blog', href: '/blog' },
	{ id: 3, name: 'About', href: '/about' },
];

function Product() {
  const pathname = usePathname()

  return (
    <div>
      Product Page
      <h1>
        <b>Link Component</b>
      </h1>
      <nav>
        <ul>
          {NavLinks.map((link) => {
            	let isActive =pathname.startsWith(link.href)

            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={isActive ? "font-bold" : "bg-blue-400"}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Product;
