import React from 'react'
import "./Posts.css"
import { PostsData } from "./PostData"
import Post from "./Post"

const Posts = () => {
    return (
        <div className='posts'>
            {PostsData.map((item, id) => {
                return (
                    <Post data={item} id={id} />
                )
            })}
        </div>
    )
}

export default Posts