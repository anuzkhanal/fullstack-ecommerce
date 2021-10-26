/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type OrderDocument = Document & {
  orderDate: Date
  orderAddress: string
  userId: string
  productId: string
}

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    required: true,
  },
  orderAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
})

export default mongoose.model<OrderDocument>('Order', orderSchema)
