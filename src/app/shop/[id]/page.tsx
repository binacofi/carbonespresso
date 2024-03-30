"use client"
import type Product from "../../pipes"
// import productList from "../assets/products.json"
import { Products } from "../../global"
import { useEffect, useState } from "react"
import {useParams} from "next/navigation"

export default function Product() {

  const params = useParams<{id: string}>()
  
  
  const [product, SetProduct] = useState<Product>(Products[0])
  const [render, SetRender] = useState<boolean>(false)


  useEffect(() => {


    Products.map((p: Product) => {

      if (p.id == params.id) {
        SetProduct(p)
      }

    })
  }, [render])

  function CalculatePrice() {

    product.totalPrice = product.price * product.quantity

    let discountLength = product.discount.length

      if (product.discount.length > 0) {

        if (product.quantity <= discountLength) {
          product.discountPrice = product.totalPrice - (product.totalPrice * product.discount[product.quantity- 1])
        } else {
          product.discountPrice = product.totalPrice - (product.totalPrice * product.discount[discountLength - 1])
        }

        product.discountPrice = Math.trunc(product.discountPrice)
      } 
  }

  function AddToCar() {
    product.inCar = true
  }

  function SetQuantity(n: number) {
    product.quantity = n
    CalculatePrice()
    SetRender(!render)
  }

  function SetPresentation(product: Product, data: string) {
    product.selectedPresentation = data
    SetRender(!render)
  }

  return(
    <>
    <div className="p-10">
      <h2 className="text-titles text-2xl sm:text-3xl font-bold">{product.name}</h2>
      <div className="w-full flex flex-col md:flex-row mt-10">
        <div className="flex flex-col md:w-2/4">
          <div className="flex-row w-full flex">
            <div className="flex justify-center md:justify-end align-center content-center items-center w-full">
              <img src={product.imageUrl} alt="product image" className="drop-shadow-xl max-w-sm" />
            </div>
          </div>
        </div> 
        <div className="w-full mt-5 text-gray-700 gap-5 flex flex-col">
          <span className={`${product.quantity <= 1 ? "" : "hidden"} font-bold text-2xl block text-navbar`}>${product.price}</span>
          <span className={`${product.quantity <= 1 ? "hidden" : ""} font-bold text-2xl block text-navbar`}><span className={ product.discount.length > 0 && product.totalPrice != product.discountPrice ? "line-through font-normal" : "" }>${product.totalPrice}</span>{product.discount.length > 0 && product.totalPrice != product.discountPrice ? " - $" + product.discountPrice : ""}</span>
          <span className="font-light block whitespace-pre-wrap text-sm">{product.description}</span>
          <div className="flex gap-4 items-center">
          <label className="text-sm">Presentación</label>
          <select value={product.selectedPresentation} onChange={(e) => SetPresentation(product, e.target.value)} className="border rounded-md bg-white text-gray-700 p-2 text-sm w-full max-w-44">
            <option value="">Elige una opcion</option>
            {
              product.presentation.map((p: string, index: number) => {
                  return <option key={`presentation-` + index} value={p}>{p}</option> 
              })
            }
          </select>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <input onChange={ e => SetQuantity(Number(e.target.value))} className="max-w-16 px-2 py-2 text-sm text-footer border rounded" type="number" value={product.quantity} min="1"></input>
            <button onClick={AddToCar} className={`text-sm text-white bg-button rounded py-2 px-5 align-center transition-all duration-200 hover:shadow-xl w-full max-w-48`}>Agregar al carrito</button>
          </div>

      </div>
    </div>

    </div>
        </>
  )
}
