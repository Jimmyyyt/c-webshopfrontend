import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import AddProduct from './components/products/AddProduct';
import CreateProduct from './views/CreateProduct';



function App() {
  return (
   <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/addproducts" component={CreateProduct} />
        </Switch>
      </div>

   </BrowserRouter>
  );
}

export default App;
