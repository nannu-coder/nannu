import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AllProject from './Components/AllProject/AllProject';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/allproject' element={<AllProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
