import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import MessageItem from './MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';


export default ({user, data}) =>{

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body: 'Olá!!!Vc tá aí?'},
        {author: 123, body: 'Caso Urgente!!'},
        {author: 1236, body: 'Não Tô não....'}, 
        {author: 123, body: 'XP'},
        {author: 123, body: 'Ainda aborrecido pq prendi seu rabo na porta?'},
        {author: 1236, body: '3r4236r4##$#$!'}, 
        {author: 123, body: 'Quando morrê passa!!'},
        {author: 123, body: 'XD'},
        {author: 1236, body: 'Cê é Cringe!'}, 
        {author: 123, body: 'Q q é isso?'},
        {author: 123, body: 'É de comer?'},
        {author: 1236, body: 'Sim...'}, 
        {author: 123, body: '??????'},
        {author: 123, body: ' C tá aí?'},
        {author: 1236, body: 'zzZZZzzzZZZZzzzzzzzzZZZZ'},    
    ]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }

    }, [list]);

    const handleEmojiClick = (e, emojiObject) =>{
       setText (text + emojiObject.emoji);
    }

    const handleOpenEmoji = () =>{
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if (recognition !== null){

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = ()=>{
                setListening(false);
            }
            recognition.onresult = (e) =>{
                setText(e.results[0][0].transcript);
            }
            recognition.start();
        }
    }

    const handleSendClick = () => {

    }

    return(
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src= {data.image} alt="profile photo" />
                    <div className="chatWindow--name">{data.title}</div>
                </div>
                <div className="chatWindow--headerbuttons">
                   <div className="chatWindow--btn">
                       <SearchIcon style={{color: '#919191'}} />
                    </div> 

                    <div className="chatWindow--btn">
                       <AttachFileIcon style={{color: '#919191'}} />
                    </div> 

                    <div className="chatWindow--btn">
                       <MoreVertIcon style={{color: '#919191'}} />
                    </div> 

                </div>
            </div>
            <div ref={body} className="chatWindow--body">
                {list.map((item, key)=>(
                    <MessageItem 
                    key={key}
                    data={item}
                    user={user}
                    />
                ))}

            </div>
            <div className="chatWindow--emojiarea" 
            style={{height: emojiOpen ? '200px' : '0px'}}
            >
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chatWindow--footer">

                <div className="chatWindow--pre">

                <div className="chatWindow--btn"
                onClick={handleCloseEmoji}
                style={{width: emojiOpen?40:0}}
                >
                        <CloseIcon style={{color: '#919191'}} />
                    </div>

                    <div className="chatWindow--btn"
                    onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen?'#009688': '#919191'}} />
                    </div>
                </div>

                <div className="chatWindow--inputarea">
                    <input 
                    className="chatWindow--input" 
                    type="text" 
                    placeholder="Digite uma Mensagem"
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">

                {text === '' &&
                <div onClick={handleMicClick} className="chatWindow--btn">
                        <MicIcon style={{color: listening ? '#123ECE' : '#919191'}} />
                </div>
                }
                {text !== '' &&
                <div onClick={handleSendClick} className="chatWindow--btn">
                        <SendIcon style={{color: '#919191'}} />
                    </div>
                }
                </div>
            </div>
        </div>
    );
}