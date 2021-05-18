import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  return <div>
    my posts
      <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove posts</button>
    </div>
    
    <div className={s.posts}>
      <Post message='Hi, Mr.Fox, where is my chicken?' />
      <Post message="I don't now,I'am still hungrry... "/>
    
     </div>
  </div>

}

export default MyPosts;