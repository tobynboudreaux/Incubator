import axios from "axios";
import { useSelector } from "react-redux";
import "../Messages.scss";

export const ChatPage = (props) => {

    const userData = useSelector(state=>state.user);

    const getMatches = async () => {
        
        await axios.post("http://localhost:8080/user/", userData)
        .then((response)=>{
            alert(response);
        })
        .catch((error)=>{
            alert(error);
        });
    }

    const getMessages = async () => {
        
        await axios.post("http://localhost:8080/user/", userData)
        .then((response)=>{
            alert(response);
        })
        .catch((error)=>{
            alert(error);
        });
    }

    return(
        <div className="log-bg">
            <div className="container">

                <div className="row justify-content-center">
                    <h3 className="msg-title">Messages</h3>
                </div>

                {/* A list of users who have matched with you */}
                
            </div>
        </div>
        
    )
}