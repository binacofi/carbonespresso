interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  totalPrice: number;
  discountPrice: number;
  tags: string[];
  inCar: number;
  imageUrl: string;
  presentation: string[];
  selectedPresentation: string;
  discount: number[]
}

interface Car {
  totalPrice: number;
  rawPrice: number;
  totalDiscount: number;
  products: CarProduct[];
}

interface CarProduct {
  id: string; 
  name: string;
  price: number;
  totalPrice: number;
  discountPrice: number;
  inCar: number;
  selectedPresentation: string;
}

export const productToCar = (product: Product): CarProduct => {
  let newProduct: CarProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    totalPrice: product.totalPrice,
    discountPrice: product.discountPrice,
    inCar: product.inCar,
    selectedPresentation: product.selectedPresentation,
  }

  return newProduct
}

export type {
  Product,
  Car,
  CarProduct
}
