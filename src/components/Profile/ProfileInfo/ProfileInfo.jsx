import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
     <div>
    <div>
        <img src='https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
    </div>
    <div className={s.descriptionBlock}>
        ava + description
        </div>
</div>   
    )
}


export default ProfileInfo 