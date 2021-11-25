import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contaxts/AuthProvider';
import Booking from './pages/Booking/Booking/Booking';
import MoreProducts from './pages/Home/MoreProducts/MoreProducts';
import Header from './pages/Share/Header/Header';
import Footer from './pages/Share/Footer/Footer';
import MoreProductsBooking from './pages/Booking/MoreProductsBooking/MoreProductsBooking';
import NotFound from './pages/NotFound/NotFound';
import AddProdducts from './pages/Dashboard/AddProducts/AddProducts'
import AddReviews from './pages/Dashboard/AddReviews/AddReviews';
import ManageOrder from './pages/Dashboard/ManageOrder/ManageOrder';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/moreProducts">
              <MoreProducts></MoreProducts>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>



            <PrivateRoute path="/booking/:productId">

              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/moreBooking/:productId">

              <MoreProductsBooking></MoreProductsBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>

    </div>

  );
}

export default App;
