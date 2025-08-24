import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import {Shop} from './Pages/Shop'
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import {Cart} from './Pages/Cart';
import banner_thrift from './Components/Assets/banner_thrift.jpeg'
import banner_hidden from './Components/Assets/banner_hidden.jpeg'
import banner_access from './Components/Assets/banner_asscess.jpeg'
import rent_banner from './Components/Assets/rent_it.jpeg'
import ChatBot from './Components/ChatBot/ChatBot';
import { ComingSoon } from './Components/ComingSoon/ComingSoon';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <ChatBot/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/hidden-gems' element={<ShopCategory heading="Welcome to Hidden-gems!!" banner={banner_hidden} category="hidden-gems"/>}/>
        <Route path='/thrift' element={<ShopCategory heading="Welcome to Thrift!!" banner={banner_thrift} category = "thrift"/>}/>
        <Route path='/rents' element={<ShopCategory heading="Welcome to Rent-It!!" banner={rent_banner} category = "rents"/>}/>
        <Route path='/accessories' element={<ShopCategory heading="Welcome to Accessories!!" banner={banner_access} category="accessories"/>}/>
        <Route path='/trial-trunk' element={<ShopCategory heading="Welcome to The Trial-Trunk" banner={banner_access} category="trial-trunk"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element = {<Product/>}/>   
        </Route>
        <Route path='/coming-soon' element={<ComingSoon/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
