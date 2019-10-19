import React from 'react';
import { Button, Checkbox, Form, Container, Icon } from 'semantic-ui-react';
import Header from '../../../components/headerComponent';
import MenuBar from '../CollegeMenuBar/CollegeMenuBar';
const CollegeAddEquipment = () => {
  return (
    <div>
      <MenuBar />
      <div style={{ marginTop: '2%' }}>
        <Container>
          <Form className='formDiv' onSubmit={() => alert('Equipment Added')}>
            <Form.Group widths='equals'>
              <Form.Field>
                <label>Equipment Name</label>
                <input placeholder='Equipment Name' name='equipmentName' />
              </Form.Field>
              <Form.Field>
                <label>Item Number</label>
                <input placeholder='Item Number' name='itemNumber' />
              </Form.Field>
            </Form.Group>

            <Form.Group widths='equals'>
              <Form.Field>
                <label>Item ID</label>
                <input placeholder='Item ID' name='itemID' />
              </Form.Field>
              <Form.Field>
                <label>Serial Number</label>
                <input placeholder='Serial Number' name='serialNumber' />
              </Form.Field>
            </Form.Group>

            <Form.Group widths='equals'>
              <Form.Field>
                <label>Manufacturer</label>
                <input placeholder='Manufacturer' name='manufacturer' />
              </Form.Field>
              <Form.Field>
                <label>Model</label>
                <input placeholder='model' name='model' />
              </Form.Field>
            </Form.Group>

            <Button className='submitButton' type='submit' color='yellow'>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default CollegeAddEquipment;
