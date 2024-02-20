import './styles/App.css';
import NavBar from './components/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Banner from '../public/img/img-banner.png'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Item from './components/item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chekout from './components/checkout/Checkout'
import Cart from './components/cart/CartWidget'
import NotFound from './components/notFound/NotFound'
import Footer from './components/footer/Footer';
function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <div className='containerBanner'>
            <div className="textBanner">
              <h1>Vive <span>Sano</span></h1>
              <h2>Vive <span>Mejor</span></h2>
              <p>Apiterapia Dejando Huellas</p>
            </div>
            <div className='container-fluid imgBanner'>
              <img className='' src={Banner} alt="banner" />
            </div>
          </div>
        </main>
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje={"La primera riqueza es la salud. "} subMensaje={'"Ralph W. Emerson."'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Chekout />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/itemDetail' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
