export type ProductCategory =
  | "disposable"
  | "closed-pod"
  | "open-system"
  | "accessory";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  nicotineStrength?: string;
  puffs?: number;
  image: string;
  mdliOptimised: boolean;
};