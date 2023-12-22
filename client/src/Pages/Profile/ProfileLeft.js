import React from 'react'
import "./Profile.css"
import LogoSearch from "../../components/LogoSearch/logoSearch"
import FollowersCard from "../../components/FollowersCard/followersCard"
import InfoCard from '../../components/InfoCard/InfoCard'

const ProfileLeft = () => {
    return (
        <div className='profileside'>
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft