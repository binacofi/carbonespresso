export default interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  inCar: number;
  imageUrl: string;
  presentation: string[];
  selectedPresentation: string;
}
