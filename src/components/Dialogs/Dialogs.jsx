import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'first' },
        { id: 2, name: 'second' },
        { id: 3, name: 'third' },
        { id: 4, name: 'fourth' }
    ]

    let messagesData = [
        { id: 1, text: 'What`s uuuuuuup!!!!'},
        { id: 2, text: 'Niiiice!!!!'},
        { id: 3, text: 'Yeahhhhh...'},
        { id: 4, text: 'YO!!!'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>

            <div className={s.messages}>
                <Message text={messagesData[0].text} />
                <Message text={messagesData[1].text} />
                <Message text={messagesData[2].text} />
                <Message text={messagesData[3].text} />
            
            </div>
        </div>
    )
}

export default Dialogs;