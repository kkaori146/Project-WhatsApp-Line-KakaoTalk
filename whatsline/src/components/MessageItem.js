import React from 'react';
import './MessageItem.css';

export default () => {
    return(
        <div className="messageLine">
            <div className="messageItem">
                <div className="messageText">Enviando a mensagem para saber se terá peixe ao forno com com caviar em calda</div>
                <div className="messageDate">19:00</div>
            </div>
        </div>
    );
}