import express from 'express'

import {
  createProduct,
  findProductById,
  deleteProduct,
  findAllProduct,
  updateProductById,
} from '../controllers/product'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix

router.get('/', findAllProduct)
router.get('/:productId', findProductById)
router.post('/', createProduct)
router.put('/:productId', updateProductById)
router.delete('/:productId', deleteProduct)

export default router
