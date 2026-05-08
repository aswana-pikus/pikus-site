"use client";

import { ProductCategory } from "@/features/products/types";

type Props = {
  selected: ProductCategory | "all";
  onChange: (value: ProductCategory | "all") => void;
};

export default function ProductFilters({ selected, onChange }: Props) {
  const filters: (ProductCategory | "all")[] = [
    "all",
    "disposable",
    "closed-pod",
    "open-system",
    "accessory",
  ];

  return (
    <div className="flex gap-3 flex-wrap mt-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-4 py-2 rounded-full border text-sm ${
            selected === filter ? "bg-black text-white" : ""
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}