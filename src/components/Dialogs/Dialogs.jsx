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
                {/* <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
                <DialogItem name={dialogs[1].name} id={dialogs[1].id} />
                <DialogItem name={dialogs[2].name} id={dialogs[2].id} />
                <DialogItem name={dialogs[3].name} id={dialogs[3].id} /> */}
            </div>

            <div className={s.messages}>
            {messagesElements}
                {/* <Message text={messages[0].text} />
                <Message text={messages[1].text} />
                <Message text={messages[2].text} />
                <Message text={messages[3].text} /> */}

            </div>
        </div>
    )
}

export default Dialogs;