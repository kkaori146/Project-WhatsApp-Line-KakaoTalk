import React, { useState } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import profile from "./images/profile.jpg";

export default ()=>{

  const [chatList, setChatList] = useState([
    {chatId: 1, title:'Ciclano', image: {profile}},
    {chatId: 2, title:'Ciclano', image: {profile}},
    {chatId: 3, title:'Ciclano', image: {profile}},
    {chatId: 4, title:'Ciclano', image: {profile}},
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className ="header--avatar" src={profile} alt="profile" />
          <div className="header--buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{color: '#919191'}} />
          </div>
          <div className="header-btn">
              <ChatIcon style={{color: '#919191'}} />
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
          {chatList.map((item, key)=>(
            <ChatListItem 
              key={key}
              onClick={()=>setActiveChat(chatList[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro/>
        }
            <ChatIntro />
      </div>
    </div>
  );
}