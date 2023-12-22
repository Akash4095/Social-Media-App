import React, { useState } from 'react'
import "./RightSide.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../Modals/ShareModal'


const RightSide = () => {
    const [modelOpen, setModalOpen] = useState(false)

    return (
        <div className='rightSide'>
            <div className='navIcons'>
                <img src={Home} alt='' />
                <UilSetting />
                <img src={Noti} alt='' />
                <img src={Comment} alt='' />
            </div>
            <TrendCard />
            <button className='button r-button' onClick={() => setModalOpen(true)}>Share</button>
            <ShareModal modelOpen={modelOpen} setModalOpen={setModalOpen} />
        </div>
    )
}

export default RightSide