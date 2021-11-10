import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js'

function App() {

  const usuario = "usuario de prueba"

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a SG Electronica" usuario={usuario}/>

    </div>
  );
}

export default App;
