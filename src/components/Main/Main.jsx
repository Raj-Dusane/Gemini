import React, { useContext, useState } from 'react';
import { assets } from '../../assets/gemini-clone-assets/assets/assets';
import './Main.css';
import { Context } from '../context';

const Main = () => {

    const {
        onSend,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    // const [isEnterPressed, setIsEnterPressed] = useState(false);

    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter' && input.trim() !== '') {
    //         setIsEnterPressed(true);
    //     }
    //     if (isEnterPressed) {
    //         onSend(input);
    //         setIsEnterPressed(false); 
    //     }
    // };

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <a className='github' target='_blank' style={{textDecoration:'none'}} href="https://github.com/Raj-Dusane/Gemini">
                    <img src={assets.user_icon} alt="" />
                    {/* <p>Raj Dusane</p> */}
                </a>
            </div>

            <div className="main-container">

                {!showResult ?  <>
                                <div className="greet">
                                    <p><span>Hello, Dev.</span></p>
                                    <p>How can I help you today?</p>
                                </div>
                                <div className="cards">
                                    <div className="card">
                                        <p>Suggest beautiful places to see on an upcomming road trip</p>
                                        <img src={assets.compass_icon} alt="" />
                                    </div>
                                    <div className="card">
                                        <p>Brainstorm team bonding activities for our work retreat</p>
                                        <img src={assets.bulb_icon} alt="" />
                                    </div>
                                    <div className="card">
                                        <p>Briefly summarise this concept: urban planning</p>
                                        <img src={assets.pen_icon} alt="" />
                                    </div>
                                    <div className="card">
                                        <p>Improve the readability of the following code</p>
                                        <img src={assets.code_icon} alt="" />
                                    </div>
                                </div>
                                </>
                :   <div className="result">
                        <div className="result-title">
                            <a href="https://github.com/Raj-Dusane/Gemini" target="_blank"><img src={assets.user_icon} alt="" /></a>
                            <p style={{fontSize:'19px'}}>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading 
                                ?   <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div> 
                                : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} autoComplete='off' type="text" placeholder='Enter a prompt here' name="search-box" id="search-box" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSend()} src={assets.send_icon} alt="" /> : null }
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. 
                        <a href='https://github.com/Raj-Dusane/Gemini' target='_blank'> Your privacy & Gemini Apps </a>
                    </p>
                </div> 

            </div>
        </div>
    )
}

export default Main;
