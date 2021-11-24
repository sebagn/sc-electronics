import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import CartView from './components/CartView/CartView';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/productos" element={ <ItemListContainer /> } />
        <Route path="/productos/:catId" element={ <ItemListContainer /> } />
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={ <CartView /> } />
        <Route path="/*" element={ <NotFound /> } />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
