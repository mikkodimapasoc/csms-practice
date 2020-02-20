import React, { useEffect, useState } from 'react';
import LesoMenuBar from '../LesoMenuBar/LesoMenuBar';
import {
  Button,
  Header,
  Icon,
  Segment,
  Container,
  Form,
  TextArea
} from 'semantic-ui-react';

import { firestoreMethods } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../LesoMenuBar/LesoMenuBar';

const LesoViewEquipment = () => {
  //   useEffect(() => {
  //     let select = selected.toString();
  //     firestoreMethods
  //       .getwhere('equipments', 'lab_code', '==', select, 'Status', 'desc')
  //       .then(data => {
  //         // console.log(data.value);
  //         setInventory(data.value);

  //         //   .get('equipments')
  //         //   .then(data => {
  //         //     console.log(data.value);
  //       });
  //   }, []);
  const handleButtons = text => {
    alert(text);
  };
  const [inventory, setInventory] = useState([]);

  return (
    <div>
      <MenuBar />

      <Container>
        <Segment placeholder>
          <Header icon>
            <Icon name='pdf file outline' />
            No documents are listed for this customer.
          </Header>
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Equipment Name:</Header>
          Beaker
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Date of Purchase</Header>: November 18, 2009
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Last Calibration:</Header>
          November 1, 2019
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Date of Purchase:</Header> November 18, 2009
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Calibration Certificate status:</Header>
          External
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Item Status:</Header>
          <div style={{ marginLeft: '2%', marginTop: '1%' }}>
            <Button
              onClick={() => alert('Equipment Approved for calibration')}
              color='green'
            >
              Approve as Calibrated{' '}
            </Button>
            <Button
              onClick={() => alert('Equipment Rejected for calibration')}
              color='red'
            >
              Reject for Calibration
            </Button>
          </div>
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Remarks</Header>
          <Form>
            <TextArea placeholder='Leave some Remarks' />
            <Button onClick={() => alert('Remarks submitted')} color='blue'>
              Submit
            </Button>
          </Form>
        </Segment>
      </Container>
    </div>
  );
};

export default withRouter(LesoViewEquipment);
