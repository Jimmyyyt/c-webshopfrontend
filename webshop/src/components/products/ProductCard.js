import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
// import { addToCart } from '../../store/actions/cartActions';

const ProductCard = ({product}) => {

  const dispatch = useDispatch();


  return (
    <div className="small-container">
      <Link to={`/products/${product.id}`}>

        <div className="roww">
          <div className="coll-4 ">
          <p className="text-muted">{product.subCategory.category.name} {`>`} {product.subCategory.name}</p>
          <img src={product.imageUrl} className="card-img-top" alt="..." />
            <h6>{product.name}</h6>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <button className="btnn btnn-explore">Lägg i kundvagn</button>
            <p className="text-danger">{product.price}:-</p>
          </div>
      </div>
      </Link>
    </div>

  )
}

export default ProductCard
