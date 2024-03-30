"use client"

import {useEffect, useState} from "react"
import {Products} from "../global"

export default function Navbar() {
  const [product, SetProduct] = useState(Products[0])
    useEffect(() => {

    }, [product])
  return(
  <>
    <span>{product.quantity}</span>
  </>
  )
}
