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
      <div className={s.item}>
        <Post message="Mmm,Hi..." likeCounts=' 5' />
        <Post message='Hi, Mr.Fox, where is my chicken?' likeCounts=' 3'/>
        <Post message="I don't now,I'am still hungrry... " likeCounts=' 21'/>
       
        
      </div>
    </div>
  </div>
}

export default MyPosts;