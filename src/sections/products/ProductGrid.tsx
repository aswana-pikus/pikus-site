"use client";

import { useState } from "react";
import { products } from "@/features/products/data";
import { ProductCategory } from "@/features/products/types";
import ProductFilters from "@/components/products/ProductFilters";

export default function ProductGrid() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold">
          PIKUS Products
        </h2>

        <p className="mt-4 text-[#757780]">
          Engineered devices powered by MDLI™ architecture.
        </p>

        <ProductFilters selected={filter} onChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {filtered.map((product) => (
            <a
              href={`/products/${product.id}`}
              key={product.id}
              className="border rounded-2xl p-6 bg-white hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 text-[#757780]">
                {product.description}
              </p>

              <div className="mt-4 text-sm text-[#757780]">
                Category: {product.category}
              </div>

              {product.mdliOptimised && (
                <div className="mt-2 text-sm text-black">
                  MDLI™ Optimised
                </div>
              )}

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}