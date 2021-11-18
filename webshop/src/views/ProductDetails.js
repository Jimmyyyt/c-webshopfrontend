import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../store/actions/productCatalogActions'

import { useParams } from 'react-router'

const ProductDetails = () => {

  const id = useParams().id;
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails)

  const { product } = productDetails

  useEffect(() => {
    dispatch(detailsProduct(id))
  }, [dispatch, id])

  if(!product) {
    return <div>Product Not Found</div>
  }

  return product && (
    <div className="small-containerr single-product">
    <div className="roww">
      <div className="coll-2">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="coll-2">
        {/* <p>{product.subCategory.name}</p> */}
        <h2>{product.name}</h2>
        <h4>{product.price}:-</h4>
        <input type="number" value="1" />
        <button className="btnn btnn-explore">Add To Cart</button>
        <h3>Product Description <i className="fa fa-indent"></i></h3>
        <br />
        <p>{product.description}.</p>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails
