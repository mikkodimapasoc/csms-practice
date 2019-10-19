import React, { useEffect, useState, useRef } from 'react';
import LesoMenuBar from '../CollegeMenuBar/CollegeMenuBar';
import { Table, Container, Button } from 'semantic-ui-react';
import TableHeader from './TableHeader/TableHeader';
import { firestoreMethods } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';
import * as firebase from 'firebase';

const CollegeViewInventory = ({ location, history }) => {
  const { selected } = location.state;
  const fileInput = useRef();
  useEffect(() => {
    let select = selected.toString();
    firestoreMethods
      .getwhere('equipments', 'lab_code', '==', '10002', 'Status', 'desc')
      .then(data => {
        // console.log(data.value);
        setInventory(data.value);

        //   .get('equipments')
        //   .then(data => {
        //     console.log(data.value);
      });
  }, []);
  const [inventory, setInventory] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(fileInput.current.files);
    var file = fileInput.current.files[0];
    var storageRef = firebase.storage().ref('certificates/' + file.name);
    storageRef.put(file).then(data => {
      console.log(data.ref.getDownloadURL());
    });
  };
  const handleButtons = route => {
    history.push('/CollegeViewEquipment');
  };
  const addEquipment = route => {
    history.push('/CollegeAddEquipment');
  };
  const tableBody = inventory.map(inventory => {
    const { serialNumber } = inventory;
    return (
      <Table.Row key={serialNumber}>
        <Table.Cell>{inventory.ItemNumber}</Table.Cell>
        <Table.Cell>{inventory.ItemName}</Table.Cell>
        <Table.Cell>{inventory.ItemId}</Table.Cell>
        <Table.Cell>{inventory.Age}</Table.Cell>
        <Table.Cell>{inventory.Model}</Table.Cell>
        <Table.Cell>{inventory.SerialNumber}</Table.Cell>
        <Table.Cell>{inventory.Status}</Table.Cell>
        <Table.Cell>{inventory.CalibrationDue}</Table.Cell>
        <Table.Cell>
          <Button onClick={handleButtons} color='yellow'>
            <p style={{ color: 'black' }}>MoreDetails</p>
          </Button>
        </Table.Cell>
        <Table.Cell>
          {/* <Button>Attach Certificate</Button> */}
          <form onSubmit={handleSubmit}>
            <input type='file' ref={fileInput} style={{ marginBottom: '1%' }} />
            <Button type='submit' color='teal'>
              Submit
            </Button>
          </form>
        </Table.Cell>
      </Table.Row>
    );
  });
  return (
    <div>
      <MenuBar />

      <Container>
        <Button
          onClick={addEquipment}
          color='yellow'
          style={{ marginTop: '2%' }}
        >
          <p style={{ color: 'black' }}>Add Equipment</p>
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
