import React, { useContext, useState } from 'react';
import { assets } from '../../assets/gemini-clone-assets/assets/assets';
import { Context } from '../context';
import './Sidebar.css';

const Sidebar = () => {

    const [extended, setExtended] = useState(true);
    const {onSend, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSend(prompt);
    }

    const sidebarWidth = extended ? "284px" : "68px";

    return (
        <div className='sidebar' style={{ width: sidebarWidth }}>
            <div className="top">
                <img onClick={() => setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div onClick={()=>{newChat()}} className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ?  <p> New chat </p> : null}
                </div>
                {extended ? 
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 19)} ....</p>
                                </div>

                            )
                        })}
                    </div>
                : null}
            </div>

            <div className="bottom">
                <a style={{textDecoration:'none'}}  className="github-link" href="https://github.com/Raj-Dusane" target="_blank">
                    <img src={assets.github_icon} alt="" />
                    {extended ? <p>Raj Dusane</p> : null}
                </a>
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
