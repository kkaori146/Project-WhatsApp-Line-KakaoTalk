import React from 'react';
import './ChatListItem.css';
import mscat from "../images/mscat.jpg";

export default ()=>{
    return(
        <div className="chatListItem">
            <img className="chatListItem--avatar" src={mscat} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                <div className="chatListItem--name">Emilie Mimi</div>
                <div className="chatListItem--date">14:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Hi...R u still angry? XD</p>
                    </div>
                </div>
            </div>
        </div>
    );
}