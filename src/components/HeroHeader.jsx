import { ChevronRight } from 'lucide-react';

export default function HeroHeader() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <nav className="text-sm text-gray-600 flex items-center gap-1">
          <a href="#" className="hover:text-blue-600">Home</a>
          <ChevronRight size={16} />
          <a href="#" className="hover:text-blue-600">Shop</a>
          <ChevronRight size={16} />
          <span className="text-gray-800">Compression Garments</span>
        </nav>
        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Compression Garments</h1>
            <p className="mt-2 text-gray-600 max-w-2xl">Discover medical-grade compression sleeves, stockings, and garments designed to support lymphatic health, comfort, and everyday confidence.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <div className="flex -space-x-1">
              <img className="h-8 w-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Customer 1"/>
              <img className="h-8 w-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" alt="Customer 2"/>
              <img className="h-8 w-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" alt="Customer 3"/>
            </div>
            <span>Trusted by 10,000+ customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
