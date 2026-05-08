"use client";

export default function ProductFilters({ selected, onChange }: any) {
  const categories = [
    "all",
    "disposable",
    "closed-pod",
    "open-system",
    "accessory",
  ];

  return (
    <div className="flex gap-3 mt-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded ${
            selected === cat ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}