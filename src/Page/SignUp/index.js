import SocialButton from "../../Component/SocialButton";
import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import axios from 'axios';


const SignUp = () => {

    const handleSocialLogin = (user) => {
        console.log(user);
        const data = {
            grant_type: "authorization_code",
            code: user.code,
            client_id: "770d55dzm1esjw",
            client_secret: "Wj5vaBslRUgIR1ei",
            redirect_uri: "http://localhost:3000/linkedin",
        }
        const headers = {
            "Access-Control-Allow-Origin": "*",
        }
        axios.get('https://www.linkedin.com/oauth/v2/accessToken',{headers: headers, params: data})
          .then(token => {
            debugger
            console.log("token->>>>>>>>",token);
        })
    };
      
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
    


    return (
        <div>
            <SocialButton
                provider="google"
                appId="351159360529-b52m8fvugar1mef6l8b1sehcpbclucbk.apps.googleusercontent.com"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
                >
                Login with Google
            </SocialButton>
            <LinkedIn
                clientId="770d55dzm1esjw"
                onFailure={handleSocialLoginFailure}
                onSuccess={handleSocialLogin}
                redirectUri="http://localhost:3000/linkedin"
            >
                <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
            </LinkedIn>
      </div>
    )
}

export default SignUp;