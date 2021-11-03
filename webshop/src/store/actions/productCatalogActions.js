import axios from 'axios'
import actiontypes from '../actiontypes'

export const getProductCatalog = () => {

  return async dispatch => {
    const res = await axios.get("https://ecom-webapii.azurewebsites.net/api/Products")
    dispatch(setProducts(res.data))
  }
}

export const setProducts = products => {
  return {
    type: actiontypes().productCatalog.set,
    payload: products
  }
}