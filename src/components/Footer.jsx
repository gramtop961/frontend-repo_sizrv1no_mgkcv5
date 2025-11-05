import { Truck, Shield, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold">LymphShop</h3>
          <p className="mt-2 text-gray-600 max-w-md">Your trusted source for compression garments and lymphatic care essentials. Expert support, curated brands, and fast shipping.</p>
          <div className="mt-4 flex items-center gap-6 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2"><Truck size={18}/>Fast shipping</span>
            <span className="inline-flex items-center gap-2"><Shield size={18}/>Secure checkout</span>
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 hover:text-blue-600"><Phone size={18}/>1-000-000-0000</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Shop</h4>
          <ul className="mt-3 grid gap-2 text-sm text-gray-600">
            <li><a className="hover:text-blue-600" href="#">Compression Garments</a></li>
            <li><a className="hover:text-blue-600" href="#">Accessories</a></li>
            <li><a className="hover:text-blue-600" href="#">Brands</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-3 grid gap-2 text-sm text-gray-600">
            <li><a className="hover:text-blue-600" href="#">Sizing Guide</a></li>
            <li><a className="hover:text-blue-600" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-blue-600" href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">© {new Date().getFullYear()} LymphShop. All rights reserved.</div>
    </footer>
  );
}
