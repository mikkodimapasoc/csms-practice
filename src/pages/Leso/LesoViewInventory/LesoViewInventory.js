import React, { useEffect, useState } from 'react';
import LesoMenuBar from '../LesoMenuBar/LesoMenuBar';
import { Table, Container, Button } from 'semantic-ui-react';
import TableHeader from './TableHeader/TableHeader';
import { firestoreMethods } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../LesoMenuBar/LesoMenuBar';
import LesoViewEquipment from '../LesoViewEquipment/LesoViewEquipment';

const LesoViewInventory = ({ location, history }) => {
  const { selected } = location.state;

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

  const handleButtons = route => {
    history.push('/LesoViewEquipment');
  };
  const [inventory, setInventory] = useState([]);

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
          <Button color='yellow' onClick={handleButtons}>
            <p style={{ color: 'black' }}> View Details</p>
          </Button>
        </Table.Cell>
        <Table.Cell>
          <Button color='yellow' onClick={handleButtons}>
            <p style={{ color: 'black' }}>Check Certificate</p>
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  });
  return (
    <div>
      <MenuBar />

      <Container>
        <Button
          onClick={() => alert('Notification Sent to the Laboratory')}
          color='red'
          style={{ marginTop: '2%' }}
        >
          Notify Lab to Calibrate Equipments
        </Button>
        <Table celled padded color='yellow'>
          <TableHeader />
          <Table.Body>
            {tableBody}
            <Table.Row>
              <Table.Cell>88558948954</Table.Cell>
              <Table.Cell>Beaker</Table.Cell>
              <Table.Cell>85468947</Table.Cell>
              <Table.Cell>2 years</Table.Cell>
              <Table.Cell>2017</Table.Cell>
              <Table.Cell>78587598</Table.Cell>
              <Table.Cell>Uncalibrated</Table.Cell>
              <Table.Cell>December 1, 2019</Table.Cell>
              <Table.Cell>
                <Button color='yellow' onClick={handleButtons}>
                  <p style={{ color: 'black' }}> View Details</p>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color='yellow' onClick={handleButtons}>
                  <p style={{ color: 'black' }}>Check Certificate</p>
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default withRouter(LesoViewInventory);
