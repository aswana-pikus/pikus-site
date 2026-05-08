import { notFound } from "next/navigation";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-sm text-[#757780] uppercase">
          {product.category}
        </p>

        <h1 className="text-4xl font-bold mt-2">
          {product.name}
        </h1>

        <p className="mt-6 text-[#757780] text-lg">
          {product.description}
        </p>

        <div className="mt-8 p-6 border rounded-2xl bg-white">
          <h3 className="font-semibold">Specifications</h3>

          {product.puffs && (
            <p className="mt-2 text-[#757780]">
              Puffs: {product.puffs}
            </p>
          )}

          {product.nicotineStrength && (
            <p className="text-[#757780]">
              Nicotine: {product.nicotineStrength}
            </p>
          )}

          <p className="mt-2">
            {product.mdliOptimised
              ? "MDLI™ Optimised Device"
              : "Standard Device"}
          </p>
        </div>

      </div>
    </main>
  );
}