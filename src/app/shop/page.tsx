"use client"
import type Product from "../pipes"
import productList from "../assets/products.json"
import ProductBox from "../components/product-box"
import { useEffect, useState } from "react"

export default function Shop() {

  let products: Product[] = productList.products
  const [product, SetProduct] = useState<Product>(products[0])
  const [render, SetRender] = useState<boolean>(false)

  function SelectProduct(index: number) {
    SetProduct(products[index])
  }

  useEffect(() => {
  }, [product, render])

  function IncreaseCar(product: Product) {
    product.inCar++
    SetRender(!render)
  }

  function DecreaseCar(product: Product) {
    product.inCar > 0 ? product.inCar-- : product.inCar = 0
    SetRender(!render)
  }

  return(
    <>
    <div className="w-full flex flex-col lg:flex-row p-10 mt-10">
      <div className="flex flex-col w-full">
        <div className="flex-row w-full flex">
          <div className="hidden flex-col gap-5 p-0 justify-center content-center w-full align-center items-center md:flex">
          {
          products.map((p: Product, index: number) => {

            return <button key={p.id} onClick={() => SelectProduct(index)}><ProductBox alt="product item" imgSrc={p.imageUrl}/></button>
          })
          }
          </div>
          <div className="flex justify-center md:justify-end align-center content-center items-center w-full">
            <img src={product.imageUrl} alt="product image" className="drop-shadow-xl max-w-sm" />
          </div>
        </div>
        <div className="flex flex-row md:hidden gap-5 justify-center h-44">
          {
          products.map((p: Product, index: number) => {

            return <button key={p.id} onClick={() => SelectProduct(index)}><ProductBox alt="product item" imgSrc={p.imageUrl}/></button>
          })
          }
        </div>
      </div> 
      <div className="w-full mt-5 text-gray-700 gap-5 flex flex-col">
        <h2 className="font-bold text-2xl">{product.name}</h2>
        <span className="font-light block whitespace-pre-wrap text-sm">{product.description}</span>
        <span className="font-bold text-lg block">${product.price}</span>
        <button onClick={() => IncreaseCar(product)} className={`${ product.inCar > 0 ? "hidden" : "" } py-3 bg-neutral-700 text-white text-sm sm:hover:max-w-48 hover:py-3 rounded-md hover:shadow-lg w-full sm:max-w-44 transition-all duration-200`}>Agregar al carrito</button>

<div className={ product.inCar > 0 ? "" : "hidden" }>
  <div className="flex items-center gap-1">
    <button type="button" onClick={() => DecreaseCar(product)} className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
      -
    </button>

    <input
      type="number"
      id="Quantity"
      value={product.inCar}
      contentEditable="false"
      className="h-10 w-16 rounded-md border-2 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
    />

    <button type="button" onClick={() => IncreaseCar(product)} className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
      +
    </button>
  </div>
</div>

      </div>
    </div>
    </>
  )
}
