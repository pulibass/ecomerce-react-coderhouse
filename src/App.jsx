import './styles/App.css';
import NavBar from './components/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';


function App() {

  return (
    <>
     <NavBar />
     <main>
      <h1 className='d-flex justify-content-center text-bold mt-5 text-uppercase'>Apiterapia  Dejando Huellas</h1>
      <ItemListContainer mensaje={"Bienvenidos a ItemListContainer"}/>
     </main>
    </>
  )
}

export default App
