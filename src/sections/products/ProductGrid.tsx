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
    : products.filter((p) => p.category === filter);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold">
          PIKUS Products
        </h2>

        <ProductFilters selected={filter} onChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {filtered.map((product) => (
  <a key={product.id} href={`/products/${product.id}`}>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <div>{product.category}</div>
  </a>
))}

        </div>

      </div>
    </section>
  );
}