import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message.jsx/Message';



const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'first' },
        { id: 2, name: 'second' },
        { id: 3, name: 'third' },
        { id: 4, name: 'fourth' }
    ]

    let messages = [
        { id: 1, text: 'What`s uuuuuuup!!!!' },
        { id: 2, text: 'Niiiice!!!!' },
        { id: 3, text: 'Yeahhhhh...' },
        { id: 4, text: 'YO!!!' },
    ]
    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messages
        .map((m) => <Message text={m.text} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogsElements}
            </div>

            <div className={s.messages}>
            {messagesElements}
        
            </div>
        </div>
    )
}

export default Dialogs;