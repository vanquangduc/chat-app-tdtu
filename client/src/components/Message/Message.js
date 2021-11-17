import React from "react";
import './Message.css';

const Message = ({message: {user, text, time}, name}) => {
    let isYour = false;


    if(user === name){
        isYour = true;
    }


    return(
        isYour
        ?(
            <div className="messageContainer justifyEnd">
                <p className="timeSetting pr-10">{time}</p>
                <p className="sentText pr-10">{name}</p>
                <div className="messageBox userBackground">
                    <p className="messageText">{text}</p>
                </div>
            </div>
        )
        :(
            <div className="messageContainer justifyStart">
                <div className="messageBox friendBackground">
                <p className="messageText">{text}</p>
                </div>
                <p className="sentText pl-10 pr-10 ">{user}</p>
                <p className="timeSetting">{time}</p>
            </div>
        )
    )
}

export default Message