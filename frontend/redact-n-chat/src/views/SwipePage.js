import axios from "axios";
import { useSelector } from "react-redux";
import { SwipeCard } from "../components/SwipeCard";

export const SwipePage = (props) => {

    const userData = useSelector(state=>state.user);

    const getMatches = async () => {
        
        await axios.post("http://localhost:8080/user/", userData)
        .then((response)=>{
            alert(response);
        })
        .catch((error)=>{
            alert(error);
        });

        //find a way to determine which matches haven't been selected yet
    }

    return(
        <div className="log-bg">
            <div className="container">

                <div className="row justify-content-center">
                    <h3 className="log-title">Swipe Time</h3>
                </div>

                {/* the card of user data being shown */}
                <SwipeCard img={userData.photoUrl} 
                firstName={userData.firstName} years={userData.years}
                tech={userData.techStack} bio={userData.bio} />

                <div style={{height: 100}}/>
            </div>
        </div>
        
    )
}