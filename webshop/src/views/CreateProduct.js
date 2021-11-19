import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../store/actions/productCatalogActions';

const CreateProduct = () => {

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    subCategoryId: 0
  })

  const handleName = (e) => {
    setValues({...values, name: e.target.value})
  }

  const handleDescription = (e) => {
    setValues({...values, description: e.target.value})
  }

  

  const handleImageUrl = (e) => {
    setValues({...values, imageUrl: e.target.value})
  }

  const handlePrice = (e) => {
    setValues({...values, price: parseInt(e.target.value)})
  }

  const handleSubCategoryId = (e) => {
    setValues({...values, subCategoryId: parseInt (e.target.value)})
  }

  const submitHandler = (e) => {
    e.preventDefault();

        let newProduct = {
          name: values.name,
          description: values.description,
          
          price: values.price,
          imageUrl: values.imageUrl,
          subCategoryId: values.subCategoryId
        }

        console.log(newProduct)
        dispatch(createProduct(newProduct))
        console.log('Product Created!')
        setValues({...values, name: "", description: "", imageUrl: "", price: "", subCategoryId: ""})
      }

      return (
        <div className="reg-new-product mt-5">
          <form className="col-6 m-auto p-3 mb-5 shadow-1" id="formReg" onSubmit={submitHandler}>
            <div className="text-center ">
                    <h2 className="m-auto mb-3 pb-2 add-new-product col-7">Create New Product</h2>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <div className="">
                  <label className="form-label">Name</label>
                  <input 
                    onChange={handleName}
                    type="text" 
                    id="title" 
                    className="form-control" 
                    value={values.name} />
                  
                </div>
              </div>
              </div>
    
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Description</label>
                <input 
                  onChange={handleDescription}
                  type="text" 
                  id="color" 
                  className="form-control" 
                  value={values.description} />
              </div>
              <div className="col">
                <label className="form-label">Price</label>
                <input 
                  onChange={handlePrice}
                  type="number" 
                  id="price" 
                  className="form-control" 
                  value={values.price} />
              </div>
            </div>
    
           
    
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input 
                onChange={handleImageUrl}
                type="text" 
                id="img" 
                className="form-control" 
                value={values.imageUrl} />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Sub Category</label>
              <input 
                onChange={handleSubCategoryId}
                type="number" 
                id="subCategoriesId" 
                className="form-control" 
                value={values.subCategoryId} />
            </div>
            
            <div className="col-2 m-auto">
                <button type="submit" className="btn btn-primary mb-4 ">Add</button>
            </div>
    
          </form>
        </div>
      )
      }
    


export default CreateProduct
