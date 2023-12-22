import React from 'react'
import "./Profile.css"
import ProfileLeft from './ProfileLeft'
import Profilecard from '../../components/ProfileCard/profilecard'
import PostSide from '../../components/PostSide-Middle/PostSide'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
    return (
        <div className='profile'>
            <ProfileLeft />
            <div className='profile-center'>
                <Profilecard />
                <PostSide />
            </div>
            <RightSide />
        </div>
    )
}

export default Profile