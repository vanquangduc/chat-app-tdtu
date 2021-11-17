import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import avt from '../icons/profile.png'
import ScrollToBottom from 'react-scroll-to-bottom';
import './UserList.css';

const UserList = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h1>Online:</h1>
            <div className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img alt="Avatar" src={avt} className="avatar"/>
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default UserList;
