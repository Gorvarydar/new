import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) =>
    <Post message={p.message} likeCounts={p.counts} />)

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

      </div>
    </div>
  </div>
}

export default MyPosts;