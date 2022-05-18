
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout} from './components/layout'
import Login from './pages/login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
