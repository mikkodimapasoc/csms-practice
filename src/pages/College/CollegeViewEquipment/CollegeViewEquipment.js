import React, { useEffect, useState, useRef } from 'react';
import LesoMenuBar from '../CollegeMenuBar/CollegeMenuBar';
import {
  Button,
  Header,
  Icon,
  Segment,
  Container,
  Grid,
  Form,
  Image
} from 'semantic-ui-react';

import { firestoreMethods } from '../../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';

const LesoViewEquipment = ({ location }) => {
  const { selectedKey, selectedItemId } = location.state;
  useEffect(() => {
    firestoreMethods
      .getwhere('equipments', 'ItemId', '==', selectedItemId, 'Status', 'desc')
      .then(data => {
        // console.log(data.value);
        setEquipment(data.value);

        //   .get('equipments')
        //   .then(data => {
        //     console.log(data.value);
      });
  }, []);

  let fileInput = useRef();
  const [equipment, setEquipment] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [values, setValues] = useState({
    ActionTaken: '',
    ItemStatus: ''
  });

  const onChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    setValues({ [nam]: val });
  };
  // const onSubmitHandler = event => {
  //   // firestoreMethods.update('equipments', values)
  // };

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
  const equipmentRender = equipment.map(equip => {
    return (
      <Container>
        <Segment placeholder>
          <Header icon>
            {/* <Icon name='pdf file outline' />
          No documents are listed for this customer. */}
            <Image src={equip.Certificate} size='massive' centered />
          </Header>

          {/* <form onSubmit={handleSubmit}>
          <input type='file' ref={fileInput} />
          <Button color='teal' type='submit'>
            Submit
          </Button>
        </form> */}
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Equipment Name:{equip.ItemName}</Header>
          <p style={{ color: 'black' }}> {console.log(equipment)}</p>
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Date of Purchase:</Header>
          {equip.Age}
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>
            Last Calibration: {equip.CalibrationDue}
          </Header>
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Date of Purchase: </Header>
          {equip.CalibrationDue}
        </Segment>

        <Segment color='yellow'>
          <Header size='medium'>Calibration Certificate status:</Header>
          External
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Remarks</Header>
        </Segment>
        <Segment color='yellow'>
          <Header size='medium'>Set Actions and Status:</Header>
          <Form className='formDiv' onSubmit={() => alert('Equipment Added')}>
            <Form.Group widths='equals'>
              <Form.Field>
                <label>Item Status</label>
                <select name='ItemStatus' onChange={onChangeHandler}>
                  <option value='Pending for approval'>
                    Request approval for Calibration
                  </option>
                  <option value='Uncalibrated'>Set as Uncalibrated</option>
                  <option value='For Disposal'>Set as for disposal</option>
                </select>
              </Form.Field>
              <Form.Field>
                <label>Action Taken</label>
                <select name='ActionTaken' onChange={onChangeHandler}>
                  {/* calibrating, under maintenance, for pull out */}
                  <option value='Calibrating'>Calibrating</option>
                  <option value='Under Maintenance'>Under Maintenance</option>
                  <option value='Pulling Out'>Pulling Out</option>
                </select>
              </Form.Field>
            </Form.Group>
            <Button className='submitButton' type='submit' color='yellow'>
              <p style={{ color: 'black' }}>Submit</p>
            </Button>
          </Form>

          {/* <Grid>
          <Button
            color='green'
            onClick={() => alert('Equipment set as calibrating!')}
          >
            Set as 'calibrating'
          </Button>
          <Button
            color='yellow'
            onClick={() => alert('Equipment set as Under Maintenance!')}
          >
            Set as 'Under Maintenance'
          </Button>
          <Button
            color='red'
            onClick={() => alert('Equipment set as For Pull out!')}
          >
            Set as 'For Pull Out'
          </Button>
        </Grid> */}
        </Segment>
      </Container>
    );
  });
  return (
    <div>
      <MenuBar />
      {equipmentRender}
    </div>
  );
};

export default withRouter(LesoViewEquipment);
