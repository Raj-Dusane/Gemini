import React, { useState } from 'react';
import { assets } from '../../assets/gemini-clone-assets/assets/assets';
import './Sidebar.css';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const sidebarWidth = extended ? "284px" : "68px";
    return (
        <div className='sidebar' style={{ width: sidebarWidth }}>
            <div className="top">
                <img onClick={() => setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ?  <p> New chat </p> : null}
                </div>
                {extended ? 
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react...</p>
                        </div>
                    </div>
                : null}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ?  <p>Activity</p> : null }
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null }
                </div>
            </div>
        </div>
    )
}

export default Sidebar