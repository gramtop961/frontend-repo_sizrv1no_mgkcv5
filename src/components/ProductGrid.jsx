import { useMemo } from 'react';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Juzo Soft Compression Arm Sleeve',
    price: 49.99,
    rating: 4.6,
    reviews: 214,
    image: 'https://images.unsplash.com/photo-1584466990376-09422a2b033a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKdXpvJTIwU29mdCUyMENvbXByZXNzaW9uJTIwQXJtfGVufDB8MHx8fDE3NjIzNzM4ODR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Sigvaris Essential Cotton Stockings',
    price: 79.0,
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1587658986420-bfd75e7e3f49?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWd2YXJpcyUyMEVzc2VudGlhbCUyMENvdHRvbiUyMFN0b2NraW5nc3xlbnwwfDB8fHwxNzYyMzczODg1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'Limited',
  },
  {
    id: 3,
    name: 'Medi Harmony Compression Glove',
    price: 39.5,
    rating: 4.5,
    reviews: 150,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Wear Ease Post-Surgical Bra',
    price: 64.99,
    rating: 4.4,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 5,
    name: 'Jobst Relief Knee Highs',
    price: 59.0,
    rating: 4.2,
    reviews: 122,
    image: 'https://images.unsplash.com/photo-1746806942507-a7e93fdd6dd4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKb2JzdCUyMFJlbGllZiUyMEtuZWUlMjBIaWdoc3xlbnwwfDB8fHwxNzYyMzczODg2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Medi Mediven Plus Thigh Highs',
    price: 92.5,
    rating: 4.7,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1669096080706-e99162a15657?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZWRpJTIwTWVkaXZlbiUyMFBsdXMlMjBUaGlnaCUyMEhpZ2hzfGVufDB8MHx8fDE3NjIzNzM4ODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Juzo Expert Seamless Glove',
    price: 44.25,
    rating: 4.3,
    reviews: 77,
    image: 'https://images.unsplash.com/photo-1585417238563-fb9e08ae50af?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKdXpvJTIwRXhwZXJ0JTIwU2VhbWxlc3MlMjBHbG92ZXxlbnwwfDB8fHwxNzYyMzczODg3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    name: 'Sigvaris Soft Opaque Pantyhose',
    price: 89.99,
    rating: 4.6,
    reviews: 139,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
];

function Rating({ value }) {
  const stars = useMemo(() => {
    const full = Math.floor(value);
    const half = value - full >= 0.5;
    const arr = Array.from({ length: 5 }, (_, i) => (i < full ? 'full' : i === full && half ? 'half' : 'empty'));
    return arr;
  }, [value]);

  return (
    <div className="flex items-center gap-1">
      {stars.map((type, idx) => (
        <Star key={idx} size={16} className={type === 'empty' ? 'text-gray-300' : 'text-yellow-500 fill-yellow-500'} />
      ))}
    </div>
  );
}

function ProductCard({ p }) {
  return (
    <div className="group rounded-xl border border-gray-200 overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-blue-600/90 text-white text-xs px-2 py-1">{p.badge}</span>
        )}
      </div>
      <div className="p-4 grid gap-2">
        <h3 className="font-medium leading-tight line-clamp-2 min-h-[44px]">{p.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rating value={p.rating} />
            <span className="text-xs text-gray-500">({p.reviews})</span>
          </div>
          <span className="font-semibold">${p.price.toFixed(2)}</span>
        </div>
        <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-white text-sm font-medium hover:bg-blue-700">
          <ShoppingCart size={16} />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="flex-1">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-600">Showing {PRODUCTS.length} products</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Sort by</span>
          <select className="rounded-md border border-gray-300 px-2 py-1">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button className="inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm hover:bg-gray-50"><ChevronLeft size={16}/>Prev</button>
        <button className="rounded-md bg-blue-600 text-white px-3 py-2 text-sm">1</button>
        <button className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50">2</button>
        <button className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50">3</button>
        <button className="inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm hover:bg-gray-50">Next<ChevronRight size={16}/></button>
      </div>
    </section>
  );
}
