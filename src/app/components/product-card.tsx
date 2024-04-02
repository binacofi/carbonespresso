import type Product from "../pipes"

type Props = {
  product: Product
}

export default function ProductCard(props: Props) {
  const { product } = props

    return(
      <div className="w-full hover:max-w-80 hover:shadow-lg transition-all duration-200 sm:max-w-72 bg-white rounded-sm shadow border p-5 flex flex-col gap-4">
        <img src={product.imageUrl} className="max-w-54"></img>
        <span className="font-medium text-sm block">{product.name}</span> 
      </div>
    )
}
