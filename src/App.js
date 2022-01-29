import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AllProject from './Components/AllProject/AllProject';
import Navbar from './Components/Navbar/Navbar'
import NotFound from './Components/NotFound/NotFound';
import ComingSoon from './Components/ComingSoon/ComingSoon';
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/allproject' element={<AllProject />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
