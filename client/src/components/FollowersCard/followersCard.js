import React from 'react'
import "./followersCard.css"
import { Followers } from './followersData'

const FollowersCard = () => {
    return (
        <div className='followers-card'>
            <h3>Who is following you</h3>
            {
                Followers.map((item) =>
                    <div className='follower'>
                        <div>
                            <img src={item.img} alt="" className='followerImg' />
                            <div className='name'>
                                <span>{item.name}</span>
                                <span>@{item.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>
                    </div>
                )
            }

        </div>
    )
}

export default FollowersCard