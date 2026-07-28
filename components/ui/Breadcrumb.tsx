"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

export default function Breadcrumb({ items, currentPage }: BreadcrumbProps) {
  return (
    <nav 
      className="flex items-center gap-2 text-sm text-gray-400 mb-8"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="hover:text-brand transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-black rounded px-1"
            >
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <ChevronRight size={16} className="text-white/20" aria-hidden="true" />
            )}
          </li>
        ))}
        {items.length > 0 && (
          <ChevronRight size={16} className="text-white/20" aria-hidden="true" />
        )}
        <li aria-current="page" className="text-white font-medium">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}
