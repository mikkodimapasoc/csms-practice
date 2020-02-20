import React, { useState, useContext } from 'react';
import { Menu, Container, Icon, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
import logo from '../../../assets/images/csms-final.png';
import HeaderComponent from '../../../components/headerComponent';
import './CollegeMenuBar.css';
const CollegeMenuBar = ({ history }) => {
  const handleButtons = route => {
    history.push('/' + route);
  };

  return (
    <div>
      {/* <div style={{ marginBottom: '1%' }}>
        <HeaderComponent />
      </div> */}

      <Menu color='yellow' inverted>
        <Menu.Item>
          <Image src={logo} size='medium' />
          <p style={{ color: 'black' }}>Good day, Pharmacy Department!</p>
        </Menu.Item>
        <Menu.Item>
          <Button
            // icon
            // labelPosition='left'
            className='buttonMenu'
            onClick={() => handleButtons('CollegeHome')}
            color='yellow'
          >
            <p className='menuIcons'>Home</p>
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            // icon
            // labelPosition='left'
            className='buttonMenu'
            onClick={() => handleButtons('LesoHome')}
            color='yellow'
          >
            {/* <Icon name='home' className='menuIcons' /> */}
            <p className='menuIcons'>Directory</p>
          </Button>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button
              // icon
              // labelPosition='left'
              className='buttonMenu'
              color='yellow'
            >
              {/* <Icon name='phone' className='menuIcons' /> */}
              <p className='menuIcons'>Contact developer</p>
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button
              // icon
              // labelPosition='left'
              className='buttonMenu'
              color='yellow'
            >
              {/* <Icon name='phone' className='menuIcons' /> */}
              <p className='menuIcons'>Contact</p>
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button
              onClick={() => handleButtons('')}
              // icon
              // labelPosition='left'
              className='buttonMenu'
              color='yellow'
            >
              {/* <Icon name='sign-out' className='menuIcons' /> */}
              <p className='menuIcons'>Logout</p>
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};
export default withRouter(CollegeMenuBar);
