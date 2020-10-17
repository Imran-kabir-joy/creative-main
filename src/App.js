import React, { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './Components/Home/Home/Home';
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/LoginPage/PrivateRoute';

import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import CustomerOrder from './Components/Dashboard/CustomerOrder/CustomerOrder';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Review from './Components/Dashboard/Review/Review';
import AdminPage from './Components/Dashboard/AdminPage/AdminPage';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';




export const UserContext = createContext();

function App() {


  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>

        </Route>

        <PrivateRoute path='/orderForm/'>
          <CustomerOrder></CustomerOrder>
        
        </PrivateRoute>

        <PrivateRoute path='/serviceList'>
          <ServiceList></ServiceList>

        </PrivateRoute>

        <PrivateRoute path='/postReview'>
          <Review></Review>
        </PrivateRoute>

        <PrivateRoute path='/dashboard/:courseName'>
          <Dashboard></Dashboard>    
        </PrivateRoute>

        <Route path='/admin'>
          <AdminPage></AdminPage>
        </Route>

        <Route path='/addService'>
          <AddService></AddService>
        </Route>

        <Route path='/makeAdmin'>
          <MakeAdmin></MakeAdmin>
        </Route>

        <Route path='/login'>
          <Login></Login>

        </Route>

        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
