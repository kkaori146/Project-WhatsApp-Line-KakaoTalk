import React, { useState } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


export default ()=>{

  const [chatlist, setChatList] = useState([
    {chatId: 1, title:'Ciclano', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title:'Ciclano', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title:'Ciclano', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title:'Ciclano', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
  ]);

  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1236,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    name:'Paulistinha'
  });

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat 
          chatlist ={chatlist}
          user = {user}
          show = {showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className ="header--avatar" src={user.avatar} alt="profile photo" />
          <div className="header--buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{color: '#919191', marginRight:10}} />
          </div>
          <div 
          className="header-btn"
          onClick={handleNewChat}
          >
              <ChatIcon style={{color: '#919191', marginRight:8}} />
          </div>
          <div className="header-btn">
              <MoreVertIcon style={{color: '#919191'}} />
          </div>
          </div>
        </header>
        
        <div className="search">
          <div className="search--input">
          <SearchIcon fontSize="small" style={{color: '#919191'}} />
          <input 
          type="search"
          placeholder="Procurar ou começar uma nova conversa"
          />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key)=>(
            <ChatListItem 
              key={key}
              data={item}
              active = {activeChat.chatId === chatlist[key].chatId}
              onClick={()=>setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow 
            user = {user}
            data={activeChat}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}