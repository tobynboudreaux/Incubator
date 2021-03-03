import "./SwipeCard.scss";

export const SwipeCard = (props) => {

    return(
        <div className="row justify-content-center" >

            <div className="container" align="center">
                <div className="swipe-box">
                    <div className="row justify-content-center" >
                        <img className="swipe-img" src={props.img} alt="image" />
                    </div>

                    <div className="row justify-content-center" 
                    style={{marginTop: 20}} >
                        <p className="swipe-name">{props.firstName}</p>
                        <p className="swipe-years">{props.years}+</p>
                    </div>

                    <div className="row justify-content-center" >
                        <p className="swipe-tech">{props.tech}</p>
                    </div>

                    <div className="row justify-content-center" >
                        <p className="swipe-bio">{props.bio}</p>
                    </div>
                </div>
                
            </div>

            

        </div>
    )
}