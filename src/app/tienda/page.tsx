"use client"
import { Products } from "../global"
import type Product from "../pipes"
import Link from "next/link"
import ProductCard from "../components/product-card"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import WhatsappButton from "../components/whatsapp"

export default function Shop() {

  return(
  <>
    <Navbar/>
    <div className="w-full flex flex-col p-10 my-16">
      <h2 className="text-3xl w-full text-center font-bold sm:ml-10 text-center sm:text-left text-footer">Nuestros productos</h2>
      <div className="flex sm:flex-row flex-col gap-14 justify-center items-center md:h-80 mt-16">
      { Products.map((product: Product) => {
        return <Link href={`/tienda/${product.id}`}> <ProductCard key={product.id} product={product} /></Link>
      })}
      </div>
    </div>
    <WhatsappButton/>
    <Footer/>
  </>
  )
}
