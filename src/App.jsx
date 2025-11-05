import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroHeader from './components/HeroHeader';
import FiltersSidebar from './components/FiltersSidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { Filter } from 'lucide-react';

export default function App() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroHeader />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile filter trigger */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(true)}
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium hover:bg-gray-50"
          >
            <Filter size={18} />
            Filters
          </button>
        </div>

        <div className="flex items-start gap-6">
          <FiltersSidebar />
          <ProductGrid />
        </div>
      </main>

      <Footer />

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 h-full w-[90%] max-w-sm bg-white shadow-xl p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button className="text-sm text-blue-600 hover:underline" onClick={() => setShowFilters(false)}>Close</button>
            </div>
            <FiltersSidebar mobile />
          </div>
        </div>
      )}
    </div>
  );
}
