import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="col">
      <div className="card h-100" >
        <p>{product.subCategory.name}</p>
        <img src={product.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ProductCard
