
/* eslint-disable */
import React from 'react'
import { updateNewPostText } from '../../../redux/state'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) =>
    <Post message={p.message} likeCounts={p.counts} />)

    let newPostElement = React.createRef();
    
    let addPosts = () => {
     props.addPost();

    }
    
    let removePosts =() => {
      prompt('dsdsdsd')
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text)
    }
  return <div>
    <h3>my posts</h3>
    <div className={s.postBlock}>
      <div>
        <textarea onChange ={onPostChange} 
        ref={newPostElement} 
        value = {props.newPostText}> 
        </textarea>
      </div>
      <button onClick={addPosts}>Add post</button>
      <button onClick = {removePosts}>Remove posts</button>
    </div>

    <div className={s.posts}>
      <div className={s.item}>
        {postsElements}

      </div>
    </div>
  </div>
}

export default MyPosts;