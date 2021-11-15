import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js'



function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />

    </div>
  );
}

export default App;
