import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1ktNbWn6OTP13-EBvulA9rs0vBB--qn9EQ&usqp=CAU' />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;