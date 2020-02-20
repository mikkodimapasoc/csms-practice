import React, { useRef } from 'react';
import { Button } from 'semantic-ui-react';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';
import * as firebase from 'firebase';
import { firestoreMethods } from '../../../firebase/firebase';
const CollegeSubmitCertificate = ({ location }) => {
  const { selected } = location.state;
  let fileInput = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(fileInput.current.files[0]);
    var file = fileInput.current.files[0];
    var storageRef = firebase.storage().ref('certificates/' + file.name);
    storageRef.put(file).then(data => {
      // let imageURL =
      data.ref.getDownloadURL().then(function(url) {
        firestoreMethods.update('equipments', { Certificate: url }, selected);
      });

      //   console.log(data);
    });
  };
  return (
    <div>
      <MenuBar />
      <form onSubmit={handleSubmit}>
        <input type='file' ref={fileInput} />
        <Button color='teal' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CollegeSubmitCertificate;
