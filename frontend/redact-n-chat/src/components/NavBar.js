import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router";

export const NavBar = (props) => {

    const userData = useSelector(state=>state.user);
    const [canRegister, setRegister] = useState(false);
    const [canLogin, setLogin] = useState(false);

    return(
        <>
            <div className="bot-nav-grad" />
            <div className="bot-nav">
                <div className="container">
                    <div className="row justify-content-center">
                        {userData.id == 0 ?
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
                            <div className="col-4">
                                <div className="nav-img">
                                    <img src="" alt="settings"></img>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="nav-img">
                                    <img src="" alt="match"></img>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="nav-img">
                                    <img src="" alt="chat"></img>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                </div>
            </div>
            {canRegister ? <Redirect to="/register"/> : <></>}
            {canLogin ? <Redirect to="/"/> : <></>}
        </>
    )
}