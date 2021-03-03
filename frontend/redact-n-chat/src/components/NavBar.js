import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

import chat from "../assets/chat.svg";
import cog from "../assets/cog.svg";
import match from "../assets/match.svg";

export const NavBar = (props) => {

    const userData = useSelector(state=>state.user);
    const [canRegister, setRegister] = useState(false);
    const [canLogin, setLogin] = useState(false);
    const [canSettings, setSettings] = useState(false);
    const [canMatch, setMatch] = useState(false);
    const [canChat, setChat] = useState(false);

    return(
        <>
            <div className="bot-nav-grad" />
            <div className="bot-nav">
                <div className="container">
                    <div className="row justify-content-center">
                        {userData.id != 0 ?
                            <>
                                <div className="col-6 align-self-center" onClick={()=>{
                                        if(canLogin == false)
                                        {
                                            setLogin(true);
                                            setTimeout(()=>setLogin(false), 10);
                                        }
                                    }}>
                                    <p className="nav-link">Login</p>
                                </div>
                                <div className="col-6 align-self-center" onClick={()=>{
                                        if(canRegister == false)
                                        {
                                            setRegister(true);
                                            setTimeout(()=>setRegister(false), 10);
                                        }
                                    }}>
                                    <p className="nav-link">Register</p>
                                </div>
                            </>
                        :
                        <>
                            <div className="col-4" align="center"onClick={()=>{
                                        if(canSettings == false)
                                        {
                                            setSettings(true);
                                            setTimeout(()=>setSettings(false), 10);
                                        }
                                    }}>
                                <div className="nav-img">
                                    <img src={cog} alt="settings"></img>
                                </div>
                            </div>
                            <div className="col-4" align="center" onClick={()=>{
                                        if(canMatch == false)
                                        {
                                            setMatch(true);
                                            setTimeout(()=>setMatch(false), 10);
                                        }
                                    }}>
                                <div className="nav-img">
                                    <img src={match} alt="match"></img>
                                </div>
                            </div>
                            <div className="col-4" align="center" onClick={()=>{
                                        if(canChat == false)
                                        {
                                            setChat(true);
                                            setTimeout(()=>setChat(false), 10);
                                        }
                                    }}>
                                <div className="nav-img">
                                    <img src={chat} alt="chat"></img>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                </div>
            </div>
            {canRegister ? <Redirect to="/register"/> : <></>}
            {canLogin ? <Redirect to="/"/> : <></>}
            {canSettings ? <Redirect to="/settings"/> : <></>}
            {canMatch ? <Redirect to="/swipe"/> : <></>}
            {canChat ? <Redirect to="/chat"/> : <></>}
        </>
    )
}