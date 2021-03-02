import axios from "axios";

export const RegisterPage = (props) => {

    const registerAttempt = (event) => {
        event.preventDefault();

        const username = event.currentTarget["username"].value;
        const fName = event.currentTarget["fName"].value;
        const lName = event.currentTarget["lName"].value;
        const pass1 = event.currentTarget["pass1"].value;
        const pass2 = event.currentTarget["pass2"].value;

        if(pass1 === pass2 && fName != "" && username != "" && pass1 != "")
        {
            const userData = {
                username: username,
                firstName: fName,
                lastName: lName,
                password: pass1
            }
    
            axios.post("http://localhost:8080/user/", userData)
            .then((response)=>{
                alert(response);
            })
            .catch((error)=>{
                alert(error);
            });
        }
        else
        {
            alert("ERROR: Make sure the passwords match and that no fields are left blank.");
        }
    }

    return(
        <div className="log-bg">
            <div className="container">

                <div className="row justify-content-center">
                    <h1 className="log-title">[Redact N' chat]</h1>
                </div>

                <div className="log-bg2">
                    <form onSubmit={registerAttempt}>
                        <div className="row justify-content-center">
                            <p className="input-label">Enter a username:</p>
                        </div>
                        <div className="row justify-content-center">
                            <input type="text" name="username" placeholder="Username"
                            className="input"/>
                        </div>

                        <div className="row justify-content-center">
                            <p className="input-label">Enter a first name:</p>
                        </div>
                        <div className="row justify-content-center">
                            <input type="text" name="fName" placeholder="First name"
                            className="input"/>
                        </div>

                        <div className="row justify-content-center">
                            <p className="input-label">Enter a last name:</p>
                        </div>
                        <div className="row justify-content-center">
                            <input type="text" name="lName" placeholder="Last name"
                            className="input"/>
                        </div>
                        
                        <div className="row justify-content-center">
                            <p className="input-label">Enter a password:</p>
                        </div>
                        <div className="row justify-content-center">
                            <input type="password" name="pass1" placeholder="*******"
                            className="input"/>
                        </div>

                        <div className="row justify-content-center">
                            <p className="input-label">Re-enter password:</p>
                        </div>
                        <div className="row justify-content-center">
                            <input type="password" name="pass2" placeholder="*******"
                            className="input"/>
                        </div>
                        
                        <div className="row justify-content-center">
                            <button type="submit" className="log-btn">R E G I S T E R</button>
                        </div>
                        
                        <div style={{height: 230}} />
                    </form>

                    
                </div>

            </div>
        </div>
        
    )
}