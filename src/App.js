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
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddPortfolio from './Components/Dashboard/AddPortfolio/AddPortfolio';
import Test from './Components/Dashboard/test/Test';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import AuthProvider from './Context/AuthProvider';
import SignUp from './Components/Admin/SignUp/SignUp';
import SignIn from './Components/Admin/SignIn/SignIn';
import PrivateRoute from './Components/Admin/PrivateRoute/PrivateRoute';
import AddAdmin from './Components/Dashboard/addAdmin/AddAdmin';
import AdminRoute from './Components/Admin/AdminRoute/AdminRoute';
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/allproject' element={<AllProject />} />
            <Route path='/comingsoon' element={<ComingSoon />} />
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/signin' element={<SignIn />} />

            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }>
              <Route index element={<DashboardHome />}></Route>
              <Route path='addportfolio' element={
                <AdminRoute>
                  <AddPortfolio />
                </AdminRoute>
              }></Route>
              <Route path='test' element={<Test />}></Route>
              <Route path='addadmin' element={
                <AdminRoute>
                  <AddAdmin />
                </AdminRoute>
              }></Route>
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
