import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/productos" element={ <ItemListContainer /> } />
        <Route path="/productos/:catId" element={ <ItemListContainer /> } />
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
