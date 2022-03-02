import React,{ Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import productData from './local-Json/productData.json'

import useApi from './hooks/useApi';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Navbar";

import { AppFrame } from './Components/ProductStyle';
const Home = React.lazy(() => import ("./Components/Home"));
const Products =React.lazy(() => import("./Components/Products"));
const ProductDetails =React.lazy(() => import("./Components/ProductDetailStyle"));


function App() {
  return(
    <>
    <Header></Header>
    <AppFrame className="App">
      <BrowserRouter basename="/">
        <Suspense fallback={<p>... Loading page please wait</p>}>
        <Switch>
          <Route
                path="/"
                exact
                render={(props) => <Home {...props} />}
          ></Route>
           <Route
                path="/products"
                render={(props) => <Products {...props} />}
          ></Route>
           <Route
                path="/product/:name"
                render={(props) => <ProductDetails {...props} />}
          ></Route>
           <Route
                exact
                render={() => <p> Page not found !!!</p>}
          ></Route>
        </Switch>
        </Suspense>
      </BrowserRouter>
    </AppFrame>
    </>
  );
}


export default App;
// const [products,err]=useApi("products");
//   return (

//     <div className="App">
//       <Home />
//       {products && products.map((object,index)=>( <Products key={index}  product={object} />))}
      
//     </div>
//   );