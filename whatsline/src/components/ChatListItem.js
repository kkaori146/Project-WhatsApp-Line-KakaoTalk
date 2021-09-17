import React from 'react';
import './ChatListItem.css';
import mscat from "../images/mscat.jpg";

export default ({onClick, active, data})=>{
    return(
        <div
         className={`chatListItem ${active? 'active':''}`}
         onClick={onClick}
         >
        
            <img className="chatListItem--avatar" src={mscat} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                <div className="chatListItem--name">{data.title}</div>
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
/*
Should be:
<img className="chatListItem--avatar" src={data.image} alt="" />
*/       