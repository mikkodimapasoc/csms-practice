import React, { useState, useContext, useEffect } from 'react';
import {
  Menu,
  Container,
  Icon,
  Button,
  Image,
  Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
import lesoLogo from '../../../assets/images/csms-final.png';
import ustLogo from '../../../assets/images/ust.jpg';
import HeaderComponent from '../../../components/headerComponent';
import './LesoMenuBar.css';
import { AuthContext } from '../../../context/Auth';
import { auth } from '../../../firebase/firebase';

const LesoMenuBar = ({ history }) => {
  const handleButtons = route => {
    history.push('/' + route);
  };
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: '',
    displayName: ''
  });
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  return (
    <div>
      {/* <div style={{ marginBottom: '1%' }}>
        <HeaderComponent />
      </div> */}

      <Menu color='yellow' inverted>
        <Menu.Item>
          <Image src={lesoLogo} size='medium' />
          <p style={{ color: 'black' }}>Good day, Leso Admin!</p>
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
export default withRouter(LesoMenuBar);
