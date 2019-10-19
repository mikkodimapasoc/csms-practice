import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import testRoute from './testRoute';
import LesoViewColleges from './pages/Leso/LesoViewColleges/LesoViewColleges';
import LesoHome from './pages/Leso/LesoHome/LesoHome';
import LesoViewDepartments from './pages/Leso/LesoViewDepartments/LesoViewDepartments';
import LesoViewInventory from './pages/Leso/LesoViewInventory/LesoViewInventory';
import LesoViewLaboratories from './pages/Leso/LesoViewLaboratories/LesoViewLaboratories';
import LesoViewEquipment from './pages/Leso/LesoViewEquipment/LesoViewEquipment';
import CollegeViewInventory from './pages/College/CollegeViewInventory/CollegeViewInventory';
import CollegeViewLaboratories from './pages/College/CollegeViewLaboratories/CollegeViewLaboratories';
import CollegeViewEquipment from './pages/College/CollegeViewEquipment/CollegeViewEquipment';
import CollegeHome from './pages/College/CollegeHome/CollegeHome';
import ForgotPassword from './components/ForgotPassword';
import CollegeAddEquipment from './pages/College/CollegeAddEquipment/CollegeAddEquipment';
import CollegeAddLaboratory from './pages/College/CollegeAddLaboratory/CollegeAddLaboratory';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/CollegeHome' component={CollegeHome} />
        <Route exact path='/testRoute' component={testRoute} />
        <Route exact path='/LesoViewColleges' component={LesoViewColleges} />
        <Route exact path='/LesoHome' component={LesoHome} />
        <Route exact path='/LesoViewInventory' component={LesoViewInventory} />
        <Route exact path='/LesoViewEquipment' component={LesoViewEquipment} />
        <Route exact path='/ForgotPassword' component={ForgotPassword} />
        <Route
          exact
          path='/CollegeAddLaboratory'
          component={CollegeAddLaboratory}
        />
        <Route
          exact
          path='/CollegeAddEquipment'
          component={CollegeAddEquipment}
        />
        <Route
          exact
          path='/CollegeViewEquipment'
          component={CollegeViewEquipment}
        />
        <Route
          exact
          path='/CollegeViewLaboratories'
          component={CollegeViewLaboratories}
        />
        <Route
          exact
          path='/CollegeViewInventory'
          component={CollegeViewInventory}
        />
        <Route
          exact
          path='/LesoViewLaboratories'
          component={LesoViewLaboratories}
        />
        <Route
          exact
          path='/LesoViewDepartments'
          component={LesoViewDepartments}
        />
        {/* <Route
          exact
          path='/LesoViewLaboratories'
          component={LesoViewLaboratories}
        /> */}
      </Router>
    </AuthProvider>
  );
};

export default App;
