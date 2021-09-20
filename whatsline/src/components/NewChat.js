import React, {useState} from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar2.png', name:'Beltrano'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar2.png', name:'Beltrano'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar2.png', name:'Beltrano'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar2.png', name:'Beltrano'},
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return(
        <div className="newChat"
            style={{left: show ? 0 : -415}}
        >
            <div className="newChat--head">
                <div className="newChat--backbutton" onClick={handleClose} >
                    <ArrowBackIcon style={{color:'#FFF'}} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="profile photo"/>
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}
