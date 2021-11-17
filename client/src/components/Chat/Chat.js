import React, { useEffect, useState} from "react";
import './Chat.css';
import io from 'socket.io-client';
import QueryString from "query-string";
import Messages from "../Messages/Messages";
import UserList from "../UserList/UserList";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
let socket;
const ENDPOINT = 'http://localhost:5000';
const moment = require('moment')
const Chat = ({location}) =>{
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const {username, room} = QueryString.parse(location.search);
        console.log(username);
        console.log(room);
        console.log(users)
        socket = io(ENDPOINT);
        setUsername(username);
        setRoom(room);
        socket.emit('newUser', {username, room});

        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message])
        })

        socket.on("roomData", ({users}) => {
            setUsers(users);
            console.log(users);
        })
    }, []);

    const sendMessage = e => {
        e.preventDefault();

        if(message){
            let time = moment().format('h:mm a')
            socket.emit('sendMessage', {message, time}, () => setMessage(''));
        }
    }
    return (
            <div className="outsideContainer">
                <div className="chatZone">
                    <InfoBar room={room} />
                    <Messages messages={messages} name={username}/>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                </div>
                <div className="userList">
                        <UserList users={users}/>
                </div>
               
            </div>
    )
}

export default Chat;
