import axios from 'axios';
import React, {useState, useEffect} from 'react'
// import { createProduct } from '../store/actions/productCatalogActions';

const initialFieldVaules = {
  name: '',
  description: '',
  price: 0,
  imageName: '',
  imageUrl: null,
  subcategoryid: 0
}


const CreateProduct = () => {

  const [values, setValues] = useState(initialFieldVaules)

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]:value
    })
  }

  const showPreview = e => {
    if(e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = x => {
        setValues({
          ...values,
          imageFile
        })
      }
      reader.readAsDataURL(imageFile)
    } else {
      setValues({
        ...values,
        imageFile: null
      })
    }

  }

  const webApi = (url = 'https://ecom-webapii.azurewebsites.net/api/Products') => {
    return {
      fetchAll: () => axios.get(url),
      create: newProduct => axios.post(url, newProduct)
    }
  }

  const addProduct = (formData) => {
    webApi().create(formData)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    // if(validate())
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('description', values.description)
    formData.append('price', values.price)
    formData.append('subcategoryid', values.subcategoryid)
    formData.append('imageUrl', values.imageUrl)
    addProduct(formData);
  }


  return (

    <div>
      <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} className="form-control" type="text" placeholder="Product Name" name="name" value={values.name} />
        <input onChange={handleInputChange} className="form-control" type="text" placeholder="Product Description" name="description" value={values.description} />
        <input onChange={handleInputChange} className="form-control" type="text" placeholder="Product Price" name="price" value={values.price} />
        <input onChange={handleInputChange} className="form-control" type="text" placeholder="SubCategory ID" name="subcategoryid" value={values.subcategoryid} />
        <input onChange={showPreview} className="form-control-file" type="file" accept="image/*" name="imageUrl" value={values.imageUrl} />
        <button>Submit</button>
      </form>
    </div>

    // <>
    // <div className="container text-center">
    //   <p>Add Product</p>
    // </div>
    // <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
    //   <div className="card">
    //     <div className="card-body">
    //       <div className="form-group">
    //         <input type="file" accept="image/*" className="form-control-file" />
    //       </div>
    //       <div className="form-group">
    //         <input className="form-control" placeholder="Product Name" name="name" value={values.name} onChange={handleInputChange} />
    //       </div>
    //       <div className="form-group">
    //         <input className="form-control" placeholder="Product Description" name="description" value={values.description} onChange={handleInputChange} />
    //       </div>
    //       <div className="form-group">
    //         <input className="form-control" placeholder="Product Price" name="price" value={values.price} onChange={handleInputChange} />
    //       </div>
    //       <div className="form-group">
    //         <input className="form-control" placeholder="Product SubCategory" name="subcategoryid" value={values.subcategoryid} onChange={handleInputChange} />
    //       </div>
    //       <button className="btn btn-primary" type="submit">Add Product</button>
    //     </div>
    //   </div>
    // </form>
    // </>
  )
}

export default CreateProduct
