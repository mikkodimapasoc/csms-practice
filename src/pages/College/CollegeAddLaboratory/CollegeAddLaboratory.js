import React from 'react';
import { Container, Menu, Button, Form } from 'semantic-ui-react';
import Header from '../../../components/headerComponent';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';
const CollegeAddLaboratory = () => {
  return (
    <div>
      <MenuBar />
      <Container>
        <div style={{ marginTop: '2%' }}>
          <Form className='formDiv'>
            <Form.Group widths='equals'>
              <Form.Field>
                <label>Laboratory Name</label>
                <input placeholder='Enter Laboratory Name' />
              </Form.Field>
            </Form.Group>

            <Button
              onClick={() =>
                alert('Request Sent. Please Wait for an email of confirmation')
              }
              color='yellow'
            >
              <p style={{ color: 'black' }}>Request to Create Laboratory</p>
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CollegeAddLaboratory;
