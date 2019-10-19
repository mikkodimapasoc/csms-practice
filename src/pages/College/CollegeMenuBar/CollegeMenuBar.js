import React, { useState, useContext } from 'react';
import { Menu, Container, Icon, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
import logo from '../../../assets/images/logo.jpg';
import HeaderComponent from '../../../components/headerComponent';
import './CollegeMenuBar.css';
const CollegeMenuBar = ({ history }) => {
  const handleButtons = route => {
    history.push('/' + route);
  };

  return (
    <div>
      <div style={{ marginBottom: '1%' }}>
        <HeaderComponent />
      </div>

      <Container>
        <Menu color='yellow' inverted>
          <Menu.Item>
            <Button
              icon
              labelPosition='left'
              className='buttonMenu'
              onClick={() => handleButtons('CollegeHome')}
              color='yellow'
            >
              <Icon name='home' className='menuIcons' />
              <p className='menuIcons'>Home</p>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button
              icon
              labelPosition='left'
              className='buttonMenu'
              onClick={() => handleButtons('CollegeViewLaboratories')}
              color='yellow'
            >
              <Icon name='lab' className='menuIcons' />
              <p className='menuIcons'>Laboratories</p>
            </Button>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Button
                icon
                labelPosition='left'
                className='buttonMenu'
                color='yellow'
              >
                <Icon name='question' className='menuIcons' />
                <p className='menuIcons'>FAQ</p>
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Button
                icon
                labelPosition='left'
                className='buttonMenu'
                color='yellow'
              >
                <Icon name='phone' className='menuIcons' />
                <p className='menuIcons'>Contact</p>
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Button
                onClick={() => handleButtons('')}
                icon
                labelPosition='left'
                className='buttonMenu'
                color='yellow'
              >
                <Icon name='sign-out' className='menuIcons' />
                <p className='menuIcons'>Logout</p>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
};
export default withRouter(CollegeMenuBar);
