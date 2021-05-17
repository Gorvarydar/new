import s from './MyPosts.module.css'
const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove posts</button>
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZxuJojmnBhsIArZ_FbMgepD7mBu5VLNmiw&usqp=CAU'/>
          post1
          </div>
        <div>
          post2
          </div>
          <div>
          post2
          </div>
          <div>
          post2
          </div>
      </div>
    </div>
  )}

export default MyPosts;