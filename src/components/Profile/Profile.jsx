import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
    </div>
    <div>
      ava
    </div>
      <MyPosts />
      
  </div>
}

export default Profile;