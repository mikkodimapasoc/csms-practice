import React, { useState } from 'react';
import { Button, Checkbox, Form, Container, Icon } from 'semantic-ui-react';
import Header from '../../../components/headerComponent';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';
import { firestoreMethods } from '../../../firebase/firebase';
const CollegeAddEquipment = () => {
  const [values, setValues] = useState({
    ItemName: '',
    ItemId: '',
    DepartmentName: '',
    Certificate: '',
    CalibrationDue: '',
    LabName: '',
    ItemNumber: '',
    Model: '',
    SerialNumber: '',
    Status: ''
  });

  const onChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    setValues({ [nam]: val });
  };

  const onSubmitHandler = event => {
    const {
      ItemName,
      ItemId,
      DepartmentName,
      Certificate,
      CalibrationDue,
      LabName,
      ItemNumber,
      Model,
      SerialNumber,
      Status,
      CollegeName
    } = event.target.elements;
    // realtimeDatabase.create('/Colleges', {
    //   LabName: LabName.value,
    //   CollegeName: CollegeName.value
    // });

    firestoreMethods.add('equipments', {
      ItemName: ItemName.value,
      ItemId: ItemId.value,
      DepartmentName: DepartmentName.value,
      Certificate: '',
      CalibrationDue: '',
      LabName: LabName.value,
      ItemNumber: ItemNumber.value,
      Model: Model.value,
      SerialNumber: SerialNumber.value,
      CollegeName: CollegeName.value,
      Status: 'Uncalibrated'
    });
    alert('Equipment Added!');
  };
  // const onSubmitHandler = event => {
  //   firestoreMethods.add('equipments', values);
  // };
  return (
    <div>
      <MenuBar />
      <div style={{ marginTop: '2%' }}>
        <Container>
          <Form className='formDiv' onSubmit={onSubmitHandler}>
            <Form.Group widths='equals'>
              <Form.Field>
                <label>Equipment Name</label>
                <input
                  placeholder='Equipment Name'
                  name='ItemName'
                  // onChange={onChangeHandler}
                />
              </Form.Field>
              <Form.Field>
                <label>Item Number</label>
                <input
                  placeholder='Item Number'
                  name='ItemNumber'
                  // onChange={onChangeHandler}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group widths='equals'>
              <Form.Field>
                <label>Item ID</label>
                <input
                  placeholder='Item ID'
                  name='ItemId'
                  // onChange={onChangeHandler}
                />
              </Form.Field>
              <Form.Field>
                <label>Serial Number</label>
                <input
                  placeholder='Serial Number'
                  name='SerialNumber'
                  // onChange={onChangeHandler}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group widths='equals'>
              <Form.Field>
                <label>Manufacturer</label>
                <input
                  placeholder='Manufacturer'
                  name='Manufacturer'
                  // onChange={onChangeHandler}
                />
              </Form.Field>
              <Form.Field>
                <label>Model</label>
                <input
                  placeholder='Model'
                  name='Model'
                  // onChange={onChangeHandler}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group widths='equals'>
              <Form.Field>
                <label>College</label>
                <select name='CollegeName'>
                  <option value='Science'>College of Science</option>
                  <option value='Pharmacy'>Faculty of Pharmacy</option>
                  <option value='Crs'>
                    College of Rehabilitation Sciences
                  </option>
                </select>
              </Form.Field>
              <Form.Field>
                <label>Laboratory Name</label>
                {/* <select name='LabName' onChange={onChangeHandler}>
                  <option value="Science">College of Science</option>
                  <option value="Pharmacy">Faculty of Pharmacy</option>
                  <option value="Pharmacy">College of Rehabilitation Sciences</option>
                </select> */}
                <input
                  placeholder='Laboratory'
                  name='LabName'
                  // onChange={onChangeHandler}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equals'>
              <Form.Field>
                <label>Department Name</label>
                <input
                  placeholder='Department Name'
                  name='DepartmentName'
                  // onChange={onChangeHandler}
                />
              </Form.Field>
            </Form.Group>
            <Button className='submitButton' type='submit' color='yellow'>
              <p style={{ color: 'black' }}>Submit</p>
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default CollegeAddEquipment;
