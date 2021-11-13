import { combineReducers } from 'redux'
import productCatalogReducer from './productCatalogReducer'
import cartReducer from './cartReducer'
import productDetailsReducer from './productDetailsReducer'


export default combineReducers ({
  productCatalog: productCatalogReducer,
  productDetails: productDetailsReducer,
  cartReducer
})