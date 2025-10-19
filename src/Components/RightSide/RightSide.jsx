import React from 'react'
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const RightSide = () => {
    return (
        <div className='RightSide'>
            <div className="navIcons">
                {/* nav icons here */}
            </div>

            <TrendCard />

            <button className="button rg-button" onClick={() => {}} aria-label="open share modal">
                Share
            </button>

            <ShareModal modalOpened={false} setModalOpened={()=>{}} />

        </div>
    )
}

export default RightSide
