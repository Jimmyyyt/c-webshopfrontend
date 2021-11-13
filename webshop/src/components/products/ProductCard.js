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
            <h4>75" Full Array LED-TV</h4>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <button className="btnn btnn-explore">Lägg i kundvagn</button>
            <p className="text-danger">25 990:-</p>
          </div>
      </div>
      </Link>
    </div>

  )
}

export default ProductCard
