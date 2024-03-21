export default interface Product {
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
