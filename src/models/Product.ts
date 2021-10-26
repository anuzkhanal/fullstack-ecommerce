/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  productName: string
  productDesc: string
  productCat: string
  productSize: 'S' | 'M' | 'L'
  productPrice: number
}

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    index: true,
  },
  productDesc: {
    type: String,
    required: true,
  },
  productCat: {
    type: String,
    required: true,
    index: true,
  },
  productSize: {
    type: String,
    enum: ['S', 'M', 'L'],
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
