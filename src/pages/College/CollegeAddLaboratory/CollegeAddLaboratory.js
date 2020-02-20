import React, { useEffect, useState } from 'react';
import { Container, Menu, Button, Form } from 'semantic-ui-react';
import Header from '../../../components/headerComponent';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';
import { realtimeDatabase } from '../../../firebase/firebase';

const CollegeAddLaboratory = () => {
  // useEffect(() => {
  //   realtimeDatabase.create('/Colleges', {
  //     code: 5000,
  //     name: 'mikko',
  //     uid: '7757575'
  //   });
  // }, []);

  const [values, setValues] = useState({});

  const onChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    setValues({ [nam]: val });
  };
  // const onSubmitHandler = event => {
  //   realtimeDatabase.create('/Colleges', values);
  // };

  const onSubmitHandler = event => {
    event.preventDefault();

    const { LabName, CollegeName } = event.target.elements;
    realtimeDatabase.create('/Colleges', {
      LabName: LabName.value,
      CollegeName: CollegeName.value
    });
  };

  return (
    <div>
      <MenuBar />
      <Container>
        <div style={{ marginTop: '2%' }}>
          <Form className='formDiv' onSubmit={onSubmitHandler}>
            <Form.Group widths='equals'>
              <Form.Field>
                <label>Laboratory Name</label>
                <input placeholder='Enter Laboratory Name' name='LabName' />
              </Form.Field>

              <Form.Field>
                <label>Laboratory Name</label>
                <select name='CollegeName'>
                  <option value='Science'>College of Science</option>
                  <option value='Pharmacy'>Faculty of Pharmacy</option>
                  <option value='Pharmacy'>
                    College of Rehabilitation Sciences
                  </option>
                </select>
              </Form.Field>
            </Form.Group>

            <Button
              onClick={() => alert('Request Sent!')}
              color='yellow'
              type='submit'
            >
              <p style={{ color: 'black' }}>Add Laboratory</p>
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CollegeAddLaboratory;
