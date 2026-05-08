"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/features/products/api";
import ProductFilters from "@/components/products/ProductFilters";

export default function ProductGrid() {
  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  const filtered =
    filter === "all"
      ? products
      : products.filter(
          (p) => p.attributes.category === filter
        );

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold">
          PIKUS Products
        </h2>

        <ProductFilters selected={filter} onChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {filtered.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className="border rounded-2xl p-6 bg-white"
            >
              <h3 className="text-xl font-semibold">
                {product.attributes.name}
              </h3>

              <p className="text-[#757780] mt-2">
                {product.attributes.description}
              </p>

              <div className="mt-2 text-sm">
                Category: {product.attributes.category}
              </div>

              {product.attributes.mdliOptimised && (
                <div className="mt-2 text-black text-sm">
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