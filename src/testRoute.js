/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState, useRef } from 'react';
import { AuthContext } from './context/Auth';
import {
  logoutUser,
  realtimeDatabase,
  registerUser,
  updateUser,
  login,
  auth
} from './firebase/firebase';
import MenuBar from './components/MenuBar/MenuBar';
import HomeCard from './components/HomeCard/HomeCard';
const testRoute = () => {
  const [departments, setDepartments] = useState();
  // const { currentUser } = useContext(AuthContext);

  let fileInput = useRef();

  // useEffect(() => {
  //   // auth().currentUser.updateProfile({
  //   //   displayName: 'LESO'
  //   // });
  //   logoutUser();
  // }, []);

  // const runUpdate = () =>
  //   user
  //     .updateProfile({
  //       displayName: 'LESO'
  //     })
  //     .then(function() {
  //       // Update successful.
  //     })
  //     .catch(function(error) {
  //       // An error happened.
  //     });

  const handleSubmit = (e, itemKey) => {
    e.preventDefault();
    console.log(fileInput.current.files);
    var file = fileInput.current.files[0].name;
    // var storageRef = firebase.storage().ref('img/' + file);
    // storageRef.put(file).then(data => {
    //   // let imageURL = data.ref.getDownloadURL();
    //   // firestoreMethods.update('equipments', { Certificate: imageURL }, itemKey);

    //   console.log(data);
    // });
  };
  return (
    <div>
      <MenuBar />
      <HomeCard header='fuck SE' />
      <h1>this is test route</h1>
      {/* {console.log(
        auth().currentUser.updateProfile({
          displayName: 'LESO'
        })
      )} */}
      {/* {console.log(auth().currentUser)} */}

      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type='file' ref={fileInput} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default testRoute;
