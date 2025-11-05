import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

function FilterSection({ title, options, selected, onToggle }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex items-center justify-between text-left font-medium"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <ChevronDown size={18} className={`${open ? 'rotate-180' : ''} transition-transform`} />
      </button>
      {open && (
        <div className="mt-3 grid gap-2">
          {options.map((opt) => {
            const active = selected.includes(opt);
            return (
              <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => onToggle(opt)}
                  className="hidden"
                />
                <span className={`h-4 w-4 rounded border grid place-items-center ${active ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300'}`}>
                  {active && <Check size={14} />}
                </span>
                <span className="text-gray-700">{opt}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function FiltersSidebar({ mobile = false }) {
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [compression, setCompression] = useState([]);

  const toggle = (setter) => (val) =>
    setter((prev) => (prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]));

  return (
    <aside className={`${mobile ? '' : 'hidden lg:block'} w-full lg:w-64 xl:w-72 bg-white lg:sticky lg:top-[72px] lg:h-[calc(100vh-72px)] lg:overflow-y-auto border border-gray-200 rounded-xl p-4`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => {
            setBrand([]); setCategory([]); setSize([]); setCompression([]);
          }}
        >
          Reset
        </button>
      </div>
      <div className="mt-2 text-sm text-gray-600">Refine products by brand, category, size and compression level.</div>

      <div className="mt-4">
        <FilterSection
          title="Brand"
          options={["Juzo", "Sigvaris", "Medi", "Jobst", "Wear Ease"]}
          selected={brand}
          onToggle={toggle(setBrand)}
        />
        <FilterSection
          title="Category"
          options={["Arm Sleeves", "Leg Stockings", "Gloves & Gauntlets", "Shapewear", "Bras"]}
          selected={category}
          onToggle={toggle(setCategory)}
        />
        <FilterSection
          title="Size"
          options={["XS", "S", "M", "L", "XL", "2XL"]}
          selected={size}
          onToggle={toggle(setSize)}
        />
        <FilterSection
          title="Compression Level"
          options={["15-20 mmHg", "20-30 mmHg", "30-40 mmHg"]}
          selected={compression}
          onToggle={toggle(setCompression)}
        />
      </div>

      <div className="mt-6 grid gap-3">
        <button className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">Apply Filters</button>
        <button className="w-full inline-flex items-center justify-center rounded-md border px-4 py-2 font-medium hover:bg-gray-50">Save as Preference</button>
      </div>
    </aside>
  );
}
