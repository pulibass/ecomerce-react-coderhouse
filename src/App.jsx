import './styles/App.css';
import NavBar from './components/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Banner from './assets/img-banner.png'
import ItemContainer from './components/itemContainer/ItemContainer';

function App() {

  return (
    <>
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
      <ItemListContainer mensaje={"Bienvenidos a ItemListContainer"} />
    <ItemContainer />
    </>
  )
}

export default App
