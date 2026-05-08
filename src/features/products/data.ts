import { Product } from "./types";

export const products: Product[] = [
  {
    id: "pikus-ice-5000",
    name: "PIKUS Ice 5000",
    category: "disposable",
    description: "Smooth cooling disposable system powered by MDLI™ stability control.",
    nicotineStrength: "20mg",
    puffs: 5000,
    image: "/assets/images/ice-5000.png",
    mdliOptimised: true,
  },
  {
    id: "pikus-pod-pro",
    name: "PIKUS Pod Pro",
    category: "closed-pod",
    description: "Refined closed pod system with precision airflow control.",
    nicotineStrength: "20mg",
    image: "/assets/images/pod-pro.png",
    mdliOptimised: true,
  },
];