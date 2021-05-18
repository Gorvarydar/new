import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://lh3.googleusercontent.com/proxy/58mFDLvjpn5Du-fcApmfqs38IuJ9O99KKXh1yPQ3vczMxom186ZVVTAvx1jSprA4jDQ3Ad5WdP5xHHTQc84Msk57uOAR6EyiQZP0M6B6_wWDXX83Ku7zlzqN5QondHxWyRBqLh7jhj0dDyUL4hlY2mEyJcA' />
          {props.message}
          <div>
            <span>like</span>
          </div>
    </div>
  
  )
}

export default Post;