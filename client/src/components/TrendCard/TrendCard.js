import React from 'react'
import "./TrendCard.css"
import { TrendData } from "./TrendData"

const TrendCard = () => {
    return (
        <div className='trendcard'>
        <h3>Trends for you</h3>
            {TrendData.map((item) => {
                return (
                    <div className='trend'>
                        <span>#{item.name}</span>
                        <span>{item.shares}k</span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard