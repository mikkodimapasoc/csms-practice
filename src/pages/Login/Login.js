import React, { useEffect, useCallback } from 'react';
import { login, auth } from '../../firebase/firebase';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Image,
  Grid,
  Segment,
  Message,
  Header
} from 'semantic-ui-react';
import logo from '../../assets/images/loginPicture.jpg';
import ustlogo from '../../assets/images/ust.jpg';
import './Login.css';
const Login = ({ history }) => {
  // const [equipments, setState] = useState(null);
  // useEffect(() => {
  //   firestoreMethods.get('equipments').then(val => setState(val));

  // }, []);

  // const handleLogin = useCallback(
  //   async event => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       await login(email, password);
  //       history.push('/testRoute');
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [history]
  // );

  const style = {
    backgroundImage: `url("${logo}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await login(email.value, password.value);

        history.push('/Navigation');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  // const handleLogin = event => {
  //   const { email, password } = event.target.elements;
  //   auth()
  //     .signInWithEmailAndPassword(email.value, password.value)
  //     .then(() => {
  //       history.push('/LesoHome');
  //     })
  //     .catch(error => alert(error));
  //   event.preventDefault();
  // };
  const redirectToCollege = () => {
    history.push('/CollegeHome');
  };

  return (
    <div className='login-form'>
      <style>
        {`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}
      </style>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image
            src={ustlogo}
            size='small'
            centered
            onClick={redirectToCollege}
          />
          <Header as='h2' color='yellow' textAlign='center'>
            University of Santo Tomas
          </Header>
          <Header as='h2' color='yellow' textAlign='center'>
            Laboratory Equipments and Supplies Office
          </Header>
          <Form size='large' onSubmit={handleLogin}>
            <Segment stacked>
              <Form.Input
                name='email'
                type='email'
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Email'
              />

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                placeholder='Password'
                type='password'
              />

              <Button
                className='loginButton'
                color='yellow'
                type='submit'
                fluid
                size='large'
                style={{ color: 'black' }}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Forgot Password? <Link to='/ForgotPassword'>Click Here!</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default withRouter(Login);
