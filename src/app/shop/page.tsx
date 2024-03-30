import type Product from "../pipes"
import { Products } from "../global"
import ProductCard from "../components/product-card"
import Link from "next/link"

export default function Shop() {

  return(
  <>
    <div className="w-full flex flex-col p-10">
      <h2 className="text-3xl w-full text-center font-bold sm:ml-10 text-center sm:text-left text-footer">Nuestros productos</h2>
      <div className="flex sm:flex-row flex-col gap-14 justify-center items-center align-center mt-16">
      { Products.map((product: Product) => {
        
        return <Link href={`/shop/${product.id}`}> <ProductCard key={product.id} product={product} /></Link>
      })}
      </div>
    </div>
  </>
  )
}
