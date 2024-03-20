"use client"
import type Product from "../pipes"
import productList from "../assets/products.json"
import ProductBox from "../components/product-box"
import { useEffect, useState } from "react"

export default function Shop() {

  let products: Product[] = productList.products
  const [product, SetProduct] = useState<Product>(products[0])


  function SelectProduct(index: number) {
    SetProduct(products[index])
  }

  useEffect(() => {
    
  }, [product])

  return(
    <>
    <div className="w-full flex flex-col md:flex-row p-10 mt-10">
      <div className="flex flex-col w-full">
        <div className="flex-row w-full flex">
          <div className="hidden flex-col gap-5 p-0 justify-center content-center w-full align-center items-center md:flex">
          {
          products.map((p: Product, index: number) => {

            return <button key={`product-` + index} onClick={() => SelectProduct(index)}><ProductBox alt="product item" imgSrc={p.imageUrl}/></button>
          })
          }
          </div>
          <div className="flex justify-center md:justify-end align-center content-center items-center w-full">
            <img src={product.imageUrl} alt="product image" className="drop-shadow-xl max-w-sm" />
          </div>
        </div>
      </div> 
      <div className="w-full mt-5 text-gray-700 gap-5 flex flex-col">
        <h2 className="font-bold text-2xl">{product.name}</h2>
        <span className="font-light block whitespace-pre-wrap">{product.description}</span>
        <span className="font-bold text-lg block">${product.price}</span>
      </div>
    </div>
    </>
  )
}
