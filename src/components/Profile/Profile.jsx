import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

//   let posts = [
//     { id: 1, message: 'Mmm,Hi...', counts: 5},
//     { id: 2, message: 'Hi, Mr.Fox, where is my chicken?', counts: 3 },
//     { id: 3, message: "I don't now,I'am still hungrry...", counts: 21 },
// ]

  return (
    <div>
      <ProfileInfo />
    
      <MyPosts posts={props.posts}/>
    </div>
  )
}

export default Profile;