import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { setUserInfo } from "../actions/userActions";
import { initialUser } from "../reducers/userReducer";

export const SettingsPage = (props) => {

    const userData = useSelector(state=>state.user);
    const [backToLogin, setBackToLogin] = useState(false);

    const dispatch = useDispatch();

    const submitNewName = (event) => {
        event.preventDefault();
        
        const fName = event.currentTarget["fName"].value;

        const sentData = {
            firstName: fName,
        }

        axios.post("http://localhost:8080/user/", sentData)
        .then((response)=>{
            alert(response);
        })
        .catch((error)=>{
            alert(error);
        });
    }

    const logout = () => {

        dispatch(setUserInfo(initialUser));
        setBackToLogin(!backToLogin);
    }

    return(
        <div className="log-bg">

            <div className="row justify-content-center">
                <button onClick={logout} 
                className="log-out-btn">L O G O U T</button>
            </div>
            <hr style={{backgroundColor: "black", marginBottom: 0}}/>
            <div className="row justify-content-center">
                <h3 className="set-title">Settings</h3>
            </div>

            <form onSubmit={submitNewName}>
                <div className="row justify-content-center">
                    <p className="input-label">Change password:</p>
                </div>
                <div className="row justify-content-center">
                    <input type="password" name="pass" 
                    placeholder="Type new password here" className="input"/>
                    <button type="submit" 
                    className="set-btn">SAVE</button>
                </div>
            </form>

            <form onSubmit={submitNewName}>
                <div className="row justify-content-center">
                    <p className="input-label">Change first name:</p>
                </div>
                <div className="row justify-content-center">
                    <input type="text" name="fName" 
                    placeholder={userData.firstName} className="input"/>
                    <button type="submit" 
                    className="set-btn">SAVE</button>
                </div>
            </form>

            <form onSubmit={submitNewName}>
                <div className="row justify-content-center">
                    <p className="input-label">Change tech. stack:</p>
                </div>
                <div className="row justify-content-center">
                    <input type="text" name="tech" 
                    placeholder={userData.techStack} className="input"/>
                    <button type="submit" 
                    className="set-btn">SAVE</button>
                </div>
            </form>

            <form onSubmit={submitNewName}>
                <div className="row justify-content-center">
                    <p className="input-label">Change bio:</p>
                </div>
                <div className="row justify-content-center"
                style={{marginBottom: 50}}>
                    <textarea name="bio" className="input"
                    defaultValue={userData.bio} />
                    <button type="submit" 
                    className="set-btn">SAVE</button>
                </div>
            </form>

            <div style={{height: 110}}/>
            {backToLogin ? <Redirect to="/"/> : <></>}
        </div>
    )
}