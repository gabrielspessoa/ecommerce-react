import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Catalog } from './components/Catalog';
import { GlobalStyle } from './GlobalStyle';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route
              path='/'
              element={<Catalog url='http://localhost:3333/products'></Catalog>}
            ></Route>
            <Route path='product/' element={<h1>Teste</h1>} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
