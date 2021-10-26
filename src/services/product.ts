import { ProductDocument } from './../models/Product'
import Product from '../models/Product'

const findAllProduct = async () => {
  return Product.find()
}

const createProduct = async (productData: ProductDocument) => {
  return Product.create(productData)
}

const findProduct = async (productId: string) => {
  return Product.findById(productId)
}

const updateProduct = async (
  productId: string,
  productData: ProductDocument
) => {
  return Product.findByIdAndUpdate(productId, productData, { new: true }).exec()
}

const deleteProduct = async (productId: string) => {
  return Product.findByIdAndDelete(productId)
}

export default {
  findAllProduct,
  createProduct,
  findProduct,
  updateProduct,
  deleteProduct,
}
