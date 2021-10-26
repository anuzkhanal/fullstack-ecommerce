import { Request, Response, NextFunction } from 'express'

import ProductService from '../services/product'
import Product from '../models/Product'
import { BadRequestError, InternalServerError } from '../helpers/apiError'

export const findAllProduct = async (req: Request, res: Response) => {
  const allProduct = await ProductService.findAllProduct()
  res.json(allProduct)
}

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productName, productDesc, productCat, productSize, productPrice } =
      req.body

    const product = new Product({
      productName,
      productDesc,
      productCat,
      productSize,
      productPrice,
    })

    await ProductService.createProduct(product)
    res.json(product)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

export const findProductById = async (req: Request, res: Response) => {
  const productId = req.params['productId']
  const product = await ProductService.findProduct(productId)
  res.json(product)
}

export const updateProductById = async (req: Request, res: Response) => {
  const productId = req.params['productId']
  const productData = req.body
  const product = await ProductService.updateProduct(productId, productData)
  res.json(product)
}

export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params['productId']
  const product = await ProductService.deleteProduct(productId)
  res.json(product)
}
