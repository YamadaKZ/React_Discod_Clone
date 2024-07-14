import { Button } from "@mui/material"
import "./Login.scss"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase"

const Login = () => {

    const signIn = () => {
        signInWithPopup(auth, provider).catch((err) => {
            alert(err.message);
        });
    }

    return (
    <div className="login">
        <div className="lofinLogo">
            <img src="Robot.png" alt="" />
        </div>
        <Button onClick={signIn} >ログイン</Button>
    </div>
)
}

export default Login

