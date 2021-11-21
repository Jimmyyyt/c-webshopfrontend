import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/actions/cartActions';
// import { addToCart } from '../../store/actions/cartActions';

const ProductCard = ({product}) => {

  const dispatch = useDispatch();


  return (
    <div className="small-container">
      <Link to={`/products/${product.id}`}>
      <div className="col mt-5">
      <p className="text-muted p-2">{product.subCategory.category.name} {`>`} {product.subCategory.name}</p>
      <div className="card h-100">
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
          <p>{ product.short }</p>
          <p className="text-danger h5">{ product.price }:-</p>
          <button className="btnn btnn-explore w-100">Details</button>
          </div>
        </div>
      </div>
    </div>


      </Link>
    </div>

  )
}

export default ProductCard
