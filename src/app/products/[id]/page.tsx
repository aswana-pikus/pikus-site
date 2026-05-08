import { getProduct } from "@/features/products/api";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold">
        {product.name}
      </h1>

      <p className="mt-4 text-[#757780]">
        {product.description}
      </p>

      <div className="mt-6 text-sm">
        Category: {product.category}
      </div>

      {product.mdliOptimised && (
        <div className="mt-4 font-semibold">
          MDLI™ Optimised Product
        </div>
      )}

    </div>
  );
}