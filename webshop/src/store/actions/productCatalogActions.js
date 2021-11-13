import axios from 'axios'
import actiontypes from '../actiontypes'
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from '../productConstants'

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

export const detailsProduct = (id) => async dispatch => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: id });
  try {
    const { data } = await axios.get(`https://ecom-webapii.azurewebsites.net/api/Products/${id}`)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL , payload: error.res && error.res.data.message ? error.res.data.message : error.message })
  }
}

// export const setProduct = product => {
//   return {
//     type: actiontypes().productCatalog.setProduct,
//     payload: product
//   }
// }