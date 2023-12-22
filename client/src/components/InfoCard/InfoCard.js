import React, { useState } from 'react'
import "./InfoCard.css"
import { UilPen } from "@iconscout/react-unicons"
import ProfileModal from '../Modals/ProfileModal'

const InfoCard = () => {

    const [modelOpen, setModalOpen] = useState(false)

    return (
        <div className='infocard'>
            <div className='infohead'>
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpen(true)} />
                    <ProfileModal modelOpen={modelOpen} setModalOpen={setModalOpen} />
                </div>
            </div>
            <div className='info'>
                <span><b>Status </b></span>
                <span>In Relationship</span>
            </div>
            <div className='info'>
                <span><b>Lives In </b></span>
                <span>Bidar</span>
            </div>
            <div className='info'>
                <span><b>Works at </b></span>
                <span>Google</span>
            </div>
            <button className='button l-btn'>Logout</button>
        </div>
    )
}

export default InfoCard