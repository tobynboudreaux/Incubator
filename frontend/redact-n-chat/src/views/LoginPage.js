import axios from "axios";

export const LoginPage = (props) => {

    const loginAttempt = (event) => {
        event.preventDefault();

        const username = event.currentTarget["username"].value;
        const password = event.currentTarget["password"].value;

        const userData = {
            username: username,
            password: password
        }

        axios.post("http://localhost:8080/user/", userData)
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
                    <h1 className="log-title">[Redact N' chat]</h1>
                </div>

                <div className="log-bg2">
                    <form onSubmit={loginAttempt}>
                        <div className="row justify-content-center">
                            <p className="input-label">Username:</p>
                        </div>
                        <div className="row justify-content-center">
                            <input type="text" name="username" placeholder="username"
                            className="input"/>
                        </div>
                        
                        <div className="row justify-content-center">
                            <p className="input-label">Password:</p>
                        </div>
                        <div className="row justify-content-center">
                            <input type="password" name="password" placeholder="*******"
                            className="input"/>
                        </div>
                        
                        <div className="row justify-content-center">
                            <button type="submit" className="log-btn">L O G I N</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        
    )
}