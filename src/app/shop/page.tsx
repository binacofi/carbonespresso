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

  function CalculatePrice(product: Product) {

    product.totalPrice = product.price * product.inCar

    let discountLength = product.discount.length

      if (product.discount.length > 0) {

        if (product.inCar <= discountLength) {
          product.discountPrice = product.totalPrice - (product.totalPrice * product.discount[product.inCar - 1])
        } else {
          product.discountPrice = product.totalPrice - (product.totalPrice * product.discount[discountLength - 1])
        }

        product.discountPrice = Math.trunc(product.discountPrice)
      } 
  }

  function IncreaseCar(product: Product) {
    product.inCar++
    CalculatePrice(product)
    SetRender(!render)
  }

  function DecreaseCar(product: Product) {
    product.inCar > 0 ? product.inCar-- : product.inCar = 0
    CalculatePrice(product)
    SetRender(!render)
  }

  function SetPresentation(product: Product, data: string) {
    product.selectedPresentation = data
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
        <span className={`${product.inCar == 0 ? "" : "hidden"} font-bold text-lg block text-gray-600`}>${product.price}</span>
        <span className={`${product.inCar == 0 ? "hidden" : ""} font-bold text-lg block text-gray-600`}><span className={ product.discount.length > 0 && product.totalPrice != product.discountPrice ? "line-through font-normal" : "" }>${product.totalPrice}</span>{product.discount.length > 0 && product.totalPrice != product.discountPrice ? " - $" + product.discountPrice : ""}</span>
        <div className="flex gap-4 items-center">
        <label className="text-sm">Presentación</label>
        <select value={product.selectedPresentation} onChange={(e) => SetPresentation(product, e.target.value)} className="border rounded-md bg-white text-gray-700 p-2 text-sm w-full sm:max-w-48">
          <option value="">Elige una opcion</option>
          {
            product.presentation.map((p: string, index: number) => {
                return <option key={`presentation-` + index} value={p}>{p}</option> 
            })
          }
        </select>
        </div>
        <button disabled={ product.selectedPresentation == "" ? true : false } title={ product.selectedPresentation != "" ? "" : "Elige una presentación" } onClick={() => IncreaseCar(product)} className={`${ product.inCar > 0 ? "hidden" : "" } ${ product.selectedPresentation != "" ? "bg-neutral-700 sm:hover:max-w-48 hover:py-3 hover:shadow-lg" : "bg-neutral-500" } py-3 text-white text-sm rounded-md w-full sm:max-w-44 transition-all duration-200`}>Agregar al carrito</button>

<div className={ product.inCar > 0 ? "" : "hidden" }>
  <div className="flex items-center gap-1 w-full justify-center sm:justify-start">
    <button type="button" onClick={() => DecreaseCar(product)}  className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
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
