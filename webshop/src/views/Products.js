import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/products/ProductCard';
import { getProductCatalog } from '../store/actions/productCatalogActions'



const Products = () => {

  const dispatch = useDispatch();
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  return (
    <div className="roww row-cols-sm-2 row-cols-md-3 ">
      {
        productCatalog && productCatalog.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Products
