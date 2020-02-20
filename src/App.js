import React, { Component } from 'react';
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
import HeadViewDepartments from './pages/HeadCollege/HeadViewDepartments/HeadViewDepartments';
import HeadViewEquipment from './pages/HeadCollege/HeadViewEquipment/HeadViewEquipment';
import HeadViewLaboratories from './pages/HeadCollege/HeadViewLaboratories/HeadViewLaboratories';
import LesoPrivateRoute from './components/LesoPrivateRoute';
import CollegePrivateRoute from './components/CollegePrivateRoute';
import { auth } from './firebase/firebase';
import Navigation from './Navigation';
import CollegeSubmitCertificate from './pages/College/CollegeSubmitCertificate/CollegeSubmitCertificate';
class App extends Component {
  state = {
    loading: true,
    authenticated: false,
    currentUser: null,
    userEmail: '',
    displayName: ''
  };
  componentWillMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user,
          loading: false,
          authenticated: true,
          userEmail: user.email,
          displayName: user.displayName
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;
    if (loading) {
      return <p>Loading..</p>;
    }
    return (
      <AuthProvider>
        <Router>
          <Route exact path='/' component={Login} />
          <Route exact path='/CollegeHome' component={CollegeHome} />
          {/* <Route exact path='/Navigation' component={Navigation} authenticate = {this.state.userEmail} /> */}
          <Route
            path='/Navigation'
            render={props => (
              <Navigation
                {...props}
                signedInUser={this.state.userEmail}
                signedIndisplayName={this.state.displayName}
              />
            )}
          />
          <Route
            exact
            path='/HeadViewDepartments'
            component={HeadViewDepartments}
          />
          <Route
            exact
            path='/HeadViewEquipment'
            component={HeadViewEquipment}
          />
          <Route
            exact
            path='/HeadViewLaboratories'
            component={HeadViewLaboratories}
          />
          <Route exact path='/testRoute' component={testRoute} />
          <LesoPrivateRoute
            exact
            path='/LesoViewColleges'
            component={LesoViewColleges}
            currentUser={this.state.currentUser}
          />
          <LesoPrivateRoute
            exact
            path='/LesoHome'
            component={LesoHome}
            currentUser={this.state.currentUser}
            authenticated={this.state.authenticated}
            email={this.state.userEmail}
          />

          <Route
            exact
            path='/CollegeSubmitCertificate'
            component={CollegeSubmitCertificate}
            // currentUser={this.state.currentUser}
            // authenticated={this.state.authenticated}
            // email={this.state.userEmail}
          />
          <LesoPrivateRoute
            exact
            path='/LesoViewInventory'
            component={LesoViewInventory}
            currentUser={this.state.currentUser}
            authenticated={this.state.authenticated}
            email={this.state.userEmail}
          />
          <LesoPrivateRoute
            exact
            path='/LesoViewEquipment'
            component={LesoViewEquipment}
            currentUser={this.state.currentUser}
            authenticated={this.state.authenticated}
            email={this.state.userEmail}
          />
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
          <LesoPrivateRoute
            exact
            path='/LesoViewLaboratories'
            component={LesoViewLaboratories}
            currentUser={this.state.currentUser}
            authenticated={this.state.authenticated}
            email={this.state.userEmail}
          />
          <LesoPrivateRoute
            exact
            path='/LesoViewDepartments'
            component={LesoViewDepartments}
            currentUser={this.state.currentUser}
            authenticated={this.state.authenticated}
            email={this.state.userEmail}
          />
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
