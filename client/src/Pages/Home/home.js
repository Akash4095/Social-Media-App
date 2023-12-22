import React from 'react'
import "./Home.css"
import ProfileSide from '../../components/ProfileSide/profileSide'
import PostSide from '../../components/PostSide-Middle/PostSide'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
    return (
        <div className='home'>
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}

export default Home