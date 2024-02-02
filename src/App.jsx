import './styles/App.css';
import NavBar from './components/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Banner from './assets/img-banner.png'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Dolar from './components/Dolar';
import Item from './components/item/Item';

function App() {

  return (
    <>
      <NavBar />
      <Dolar />
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
      <ItemListContainer mensaje={"La primera riqueza es la salud. "} subMensaje={'"Ralph W. Emerson."'} />
      <Item productos={{image:"imagen",title:"lentejas", details: "Marolio, zarpadas en ricas", value:"1500 una ganga" }}/>
      <ItemDetailContainer />
    </>
  )
}

export default App
