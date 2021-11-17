import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="outsideHomeContainer">
          <div className="insideHomeContainer">
            <h1 className="heading">Enter Room</h1>
            <div>
              <input placeholder="Name" className="homeInput" type="text" onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div>
              <input placeholder="Room" className="homeInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <Link onClick={e => (!username || !room) ? e.preventDefault() : null} to={`/chat?username=${username}&room=${room}`}>
              <button className={'button mt-20'} type="submit">Sign In</button>
            </Link>
          </div>
        </div>
      );
}

export default Home;
