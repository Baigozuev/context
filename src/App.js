import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Product from './component/Product';
import Basket from './component/Basket';




function App() {
  return (
    <div className="">
      <Header/>
   <Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/product'element={<Product/>}/>
  <Route path='/basket'element={<Basket/>}/>

   </Routes>
    </div>
  );
}

export default App;
