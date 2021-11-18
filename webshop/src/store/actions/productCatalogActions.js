import axios from 'axios'
import actiontypes from '../actiontypes'
import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SUBCATEGORY_LIST_FAIL, PRODUCT_SUBCATEGORY_LIST_REQUEST, PRODUCT_SUBCATEGORY_LIST_SUCCESS } from '../productConstants'

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

export const listProductSubCategories = () => async (dispatch) => {
  dispatch({ type: PRODUCT_SUBCATEGORY_LIST_REQUEST})
  try {
    const { data } = await axios.get(`https://ecom-webapii.azurewebsites.net/api/SubCategories`);
    dispatch({ type: PRODUCT_SUBCATEGORY_LIST_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: PRODUCT_SUBCATEGORY_LIST_FAIL, payload: error.message})
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

export const createProduct = () => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });
    try {
      const { data } = await axios.post('https://ecom-webapii.azurewebsites.net/api/Products/')
      dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data.product})
    } catch (error) {
      const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      dispatch({ type: PRODUCT_CREATE_FAIL, payload: message })
    }
}
