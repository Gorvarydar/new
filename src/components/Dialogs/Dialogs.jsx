import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                  <NavLink to='/messages/1'>first</NavLink>  
                </div>
                <div className={s.dialog}>
                <NavLink to='/messages/2'>second</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink to='/messages/3'>third</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink to='/messages/4'>fourth</NavLink> 
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>What`s uuuuuuup/!!!!</div>
                <div className={s.message}>Niiiice</div>
                <div className={s.message}>Yeahhhhh</div>

            </div>
        </div>
    )
}

export default Dialogs;