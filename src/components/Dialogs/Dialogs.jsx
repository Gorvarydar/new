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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='first' id='1' />
                <DialogItem name='second' id='2' />
                <DialogItem name='third' id='3' />
                <DialogItem name='fourth' id='4' />

            </div>

            <div className={s.messages}>
                <Message text='What`s uuuuuuup!!!!' />
                <Message text='Niiiice!!!!' />
                <Message text='Yeahhhhh...' />
            </div>
        </div>
    )
}

export default Dialogs;