"use client"
import type Product from "../../pipes"
// import productList from "../assets/products.json"
import { Products } from "../../global"
import { useEffect, useState } from "react"
import {useParams} from "next/navigation"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import WhatsappButton from "@/app/components/whatsapp"
import Link from "next/link"

export default function Product() {

  const params = useParams<{id: string}>()

  const [notFound, SetNotFound] = useState<boolean>(true)
  
  const [product, SetProduct] = useState<Product>(Products[0])
  const [render, SetRender] = useState<boolean>(false)


  useEffect(() => {

    Products.map((p: Product) => {

      if (p.id == params.id) {
        SetProduct(p)
        SetNotFound(false)
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
    <Navbar/>
    <div className={`${notFound ? "h-screen" : "hidden"} px-10 flex flex-col gap-4 justify-center items-center`}>
    <h1 className="text-5xl text-footer font-bold">Artículo no encontrado</h1>
    <h2 className="text-xl">No hemos podido encontrar este artículo en la tienda</h2>
    <Link href="/shop" className="mt-10 text-white bg-button hover:shadow-lg transition-all duration-200 py-2 w-full text-center max-w-52 rounded-sm font-medium">Volver a la tienda</Link>
    </div>
    <div className={`p-10 mt-16 ${notFound ? "hidden" : ""}`}>
      <h2 className="text-footer text-2xl sm:text-3xl font-bold">{product.name}</h2>
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
            <button onClick={AddToCar} className={`text-sm text-white bg-button rounded-sm py-2 px-5 align-center transition-all duration-200 hover:shadow-xl w-full max-w-48`}>Agregar al carrito</button>
          </div>

      </div>
    </div>

    </div>
    <WhatsappButton/>
    <Footer/>
        </>
  )
}
