import { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Phone, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
            <a href="#" className="text-xl font-semibold tracking-tight">LymphShop</a>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-blue-600">Compression Garments</a>
            <a href="#" className="hover:text-blue-600">Accessories</a>
            <a href="#" className="hover:text-blue-600">Brands</a>
            <a href="#" className="hover:text-blue-600">Learn</a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white">
              <Search size={18} className="text-gray-500" />
              <input
                className="w-48 outline-none text-sm placeholder:text-gray-400"
                placeholder="Search products"
              />
            </div>
            <a href="tel:+10000000000" className="hidden sm:flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600">
              <Phone size={18} />
              <span>Support</span>
            </a>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
              <User size={20} />
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 text-white text-xs grid place-items-center">2</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
            <a href="#" className="py-2 hover:text-blue-600">Compression Garments</a>
            <a href="#" className="py-2 hover:text-blue-600">Accessories</a>
            <a href="#" className="py-2 hover:text-blue-600">Brands</a>
            <a href="#" className="py-2 hover:text-blue-600">Learn</a>
            <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 bg-white">
              <Search size={18} className="text-gray-500" />
              <input className="flex-1 outline-none text-sm" placeholder="Search products" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
