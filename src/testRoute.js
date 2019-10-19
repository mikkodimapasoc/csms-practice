/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/Auth';
import { logoutUser, realtimeDatabase } from './firebase/firebase';
import MenuBar from './components/MenuBar/MenuBar';
import HomeCard from './components/HomeCard/HomeCard';
const testRoute = () => {
  const [departments, setDepartments] = useState();
  // useEffect(() => {

  // }, []);

  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <MenuBar />
      <HomeCard header='fuck SE' />
      <h1>this is test route</h1>

      {console.log(currentUser.email)}
    </div>
  );
};

export default testRoute;
