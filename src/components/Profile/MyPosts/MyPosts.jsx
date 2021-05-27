import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Mmm,Hi...', counts: 5},
    { id: 2, message: 'Hi, Mr.Fox, where is my chicken?', counts: 3 },
    { id: 3, message: "I don't now,I'am still hungrry...", counts: 21 },
]
let postsElements = posts
.map((p) => <Post message={p.message} likeCounts={p.counts}/>)
  
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
        {postsElements}
        {/* <Post message= {posts[0].message} likeCounts={posts[0].counts} />
        <Post message= {posts[1].message} likeCounts={posts[1].counts} />
        <Post message= {posts[2].message} likeCounts={posts[2].counts} /> */}
      </div>
    </div>
  </div>
}

export default MyPosts;