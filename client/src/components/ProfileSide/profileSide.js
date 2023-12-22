import React from 'react'
import "./profileSide.css"
import LogoSearch from "../LogoSearch/logoSearch"
import Profilecard from '../ProfileCard/profilecard'
import FollowersCard from '../FollowersCard/followersCard'


const ProfileSide = () => {
  return (
    <div className='profileside'>
      <LogoSearch />
      <Profilecard/>
      <FollowersCard />
    </div>
  )
}

export default ProfileSide