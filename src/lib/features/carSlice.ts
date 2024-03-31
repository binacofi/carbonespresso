import { createSlice } from "@reduxjs/toolkit";
import { Car, CarProduct } from "@/app/pipes";

const emptyCar: Car = {
  rawPrice: 0,
  totalPrice: 0,
  totalDiscount: 0,
  products: [],
};

export const carSlice = createSlice({
  name: "car",
  initialState: emptyCar,
  reducers: {
    calcRawPrice: (state) => {
      state.products.map((product: CarProduct) => {
        state.rawPrice += product.totalPrice
      })
    },
    calcTotalDiscount: (state) => {
      state.products.map((product: CarProduct) => {
        state.totalDiscount += product.discountPrice
      })
    },
    updateProductsState: (state, newProduct) => {
      // remove the all product entry if exits
      let products = state.products.filter((product: CarProduct) => product.id != newProduct.payload.id)
      products.push(newProduct.payload)

      state.products = products

      console.log(state.products)
    }
  }
})

export const {calcRawPrice, calcTotalDiscount, updateProductsState} = carSlice.actions
export default carSlice.reducer
