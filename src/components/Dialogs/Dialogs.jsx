/* eslint-disable */
import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message.jsx/Message';



const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages
        .map((m) => <Message text={m.text} />)

        let newMessageElement = React.createRef()
        let newMessage = () => {
            let message = newMessageElement.current.value;
            alert(message);
        }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
                
            <div className={s.messages}>
                {messagesElements}

            </div>
            <textarea ref ={newMessageElement}></textarea>
            <button onClick={newMessage}>Add messages</button>
        </div>
    )
}


export default Dialogs;