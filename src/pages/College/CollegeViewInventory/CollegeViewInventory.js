import React, { useEffect, useState, useRef } from 'react';
import LesoMenuBar from '../CollegeMenuBar/CollegeMenuBar';
import {
  Table,
  Container,
  Button,
  Icon,
  Header,
  Form
} from 'semantic-ui-react';
import TableHeader from './TableHeader/TableHeader';
import { firestoreMethods } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';
import * as firebase from 'firebase';

const CollegeViewInventory = ({ location, history }) => {
  // const { selected } = location.state;
  // const fileInput = useRef();
  let fileInput = useRef();
  useEffect(() => {
    firestoreMethods
      .getwhere(
        'equipments',
        'LabName',
        '==',
        'Biology Laboratory',
        'Status',
        'desc'
      )
      .then(data => {
        // console.log(data.value);
        setInventory(data.value);

        //   .get('equipments')
        //   .then(data => {
        //     console.log(data.value);
      });
  }, []);
  const [inventory, setInventory] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    console.log(fileInput.current.files[0]);
    // var file = fileInput.current.files[0].name;
    // var storageRef = firebase.storage().ref('img/' + file);
    // storageRef.put(file).then(data => {
    //   // let imageURL = data.ref.getDownloadURL();
    //   // firestoreMethods.update('equipments', { Certificate: imageURL }, itemKey);

    //   console.log(data);
    // });
  };
  const handleButtons = (selectedKey, selectedItemId) => {
    history.push({
      pathname: '/CollegeViewEquipment',
      state: { selectedKey, selectedItemId }
    });
  };
  const addEquipment = route => {
    history.push('/CollegeAddEquipment');
  };

  const handleCertificate = selected => {
    history.push({
      pathname: '/CollegeSubmitCertificate',
      state: { selected }
    });
  };
  const tableBody = inventory.map(inventory => {
    const { ItemId, key } = inventory;

    return (
      <Table.Row key={inventory.key}>
        <Table.Cell>{inventory.ItemNumber}</Table.Cell>
        <Table.Cell>{inventory.ItemName}</Table.Cell>
        <Table.Cell>{inventory.ItemId}</Table.Cell>
        <Table.Cell>{inventory.Age}</Table.Cell>
        <Table.Cell>{inventory.Model}</Table.Cell>
        <Table.Cell>{inventory.SerialNumber}</Table.Cell>
        <Table.Cell>{inventory.Status}</Table.Cell>
        <Table.Cell>{inventory.CalibrationDue}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => handleButtons(key, ItemId)} color='yellow'>
            <p style={{ color: 'black' }}>View Equipment</p>
          </Button>
        </Table.Cell>
        <Table.Cell>
          {/* <div>
            <form onSubmit={handleSubmit}>
              <input type='file' ref={fileInput} />
              <Button color='teal' type='submit'>
                Submit
              </Button>
            </form>
          </div> */}
          <Button
            onClick={() => handleCertificate(inventory.key)}
            color='yellow'
          >
            <p style={{ color: 'black' }}>Submit or Edit current Certificate</p>
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  });
  return (
    <div>
      <MenuBar />

      <Container>
        {/* <div>
          <form onSubmit={handleSubmit}>
            <input type='file' ref={fileInput} />
            <Button color='teal' type='submit'>
              Submit
            </Button>
          </form>
        </div> */}
        <Header as='h2' style={{ marginTop: '2%' }}>
          <Icon name='lab' />
          <Header.Content>
            Laboratory 2
            <Header.Subheader>
              Faculty of Pharmacy - Biological Chemistry Department
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Button
          onClick={addEquipment}
          color='yellow'
          style={{ marginTop: '2%' }}
        >
          <p style={{ color: 'black' }}>Add Equipment</p>
        </Button>
        <Button
          onClick={() => alert('Notification Sent to the Laboratory')}
          color='blue'
          style={{ marginTop: '2%' }}
          onClick={() =>
            alert('Request sent! Please wait for an email containing your copy')
          }
        >
          Request Copy of record
        </Button>
        <Table celled padded color='yellow'>
          <TableHeader />
          <Table.Body>{tableBody}</Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default withRouter(CollegeViewInventory);
