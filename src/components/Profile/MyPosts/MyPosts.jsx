import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  let myPostsData = [
    { id: 1, message: 'Mmm,Hi...', counts: 5},
    { id: 2, message: 'Hi, Mr.Fox, where is my chicken?', counts: 3 },
    { id: 3, message: "I don't now,I'am still hungrry...", counts: 21 },
]
  return <div>
    <h3>my posts</h3>
      <div className={s.postBlock}>
      <div>
        <textarea></textarea>
        </div>
      <button>Add post</button>
      <button>Remove posts</button>
    </div>

    <div className={s.posts}>
      <div className={s.item}>
        <Post message= {myPostsData[0].message} likeCounts={myPostsData[0].counts} />
        <Post message= {myPostsData[1].message} likeCounts={myPostsData[1].counts} />
        <Post message= {myPostsData[2].message} likeCounts={myPostsData[2].counts} />\
      </div>
    </div>
  </div>
}

export default MyPosts;