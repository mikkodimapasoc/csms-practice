import React from 'react';
import { Button, Checkbox, Form, Container, Icon } from 'semantic-ui-react';
import Header from './headerComponent';

import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <Form className='formDiv'>
            <Form.Group widths='equals'>
              <Form.Field>
                <label>Enter Email</label>
                <input placeholder='Enter Email' />
              </Form.Field>
            </Form.Group>

            <Button
              onClick={() =>
                alert('Password has been reset! Please check email')
              }
              color='red'
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
