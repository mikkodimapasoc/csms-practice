import React, { useEffect, useState, Component } from 'react';
import { withRouter, Redirect } from 'react-router';
import { auth } from './firebase/firebase';
import { Signer } from 'crypto';
const Navigation = ({
  currentUser,
  history,
  location,
  signedInUser,
  signedInDisplayName
}) => {
  //   const { passThisEmail } = location.state;
  const [signedIn, setSignedIn] = useState();

  useEffect(() => {
    console.log(signedIn);
  }, [signedIn]);
  const redirectUser = () => {
    if (signedInUser === 'admin-leso@gmail.com') {
      // return <Redirect to='/LesoHome' />;
      history.push('/LesoHome');
    } else if (signedInUser === 'crs.college@gmail.com') {
      //   history.push('/CollegeHome');
      history.push({
        pathname: '/CollegeHome',
        state: { signedInDisplayName }
      });
    } else return <h1>Invalid User</h1>;
  };
  return (
    <div>
      <h1>Loading User!</h1>

      {setTimeout(() => setSignedIn(signedInUser), 500)}
      {setTimeout(() => redirectUser(), 1000)}
    </div>
  );
};

// class Navigation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { user: this.props.signedInUser };
//   }
//   componentDidMount() {
//     // if (this.props.signedInUser === 'admin-leso@gmail.com') {
//     //   this.props.history.push('/LesoHome');
//     // } else if (this.props.signedInUser === 'crs.college@gmail.com') {
//     //   this.props.history.push('/CollegeHome');
//     // } else this.props.history.push('/');
//     console.log(this.state.signedInUser);
//   }

//   render() {
//     return <h1> Loading...</h1>;
//   }
// }
export default withRouter(Navigation);
