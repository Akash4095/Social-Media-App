import React from 'react'
import Comment from "../../img/comment.png"
import Like from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import Share from "../../img/share.png"

const Post = ({ data, id }) => {
    return (
        <div className='post'>
            <img src={data.img} alt='' />
            <div className='postReaction'>
                <img src={data.liked ? Like : NotLike} alt='' />
                <img src={Comment} alt='' />
                <img src={Share} alt='' />
            </div>
            <span style={{color:'var(--gray)',fontSize:"12px"}}>{data.likes} likes</span>
            <div className='detail'>
                <span><b>{data.name}</b></span>
                <span>#{data.desc}</span>
            </div>
        </div>
    )
}

export default Post