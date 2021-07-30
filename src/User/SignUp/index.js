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
            redirect_uri: "https://surveyagency.netlify.app/linkedin",
        }
        const headers = {
            "Access-Control-Allow-Origin": "*",
        }
        axios.get('https://www.linkedin.com/oauth/v2/accessToken',{headers: headers, params: data})
          .then(token => {
            console.log("token->>>>>>>>",token);
        })
    };
      
    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
    


    return (
        <div>   
            <LinkedIn
                clientId="770d55dzm1esjw"
                onFailure={handleSocialLoginFailure}
                onSuccess={handleSocialLogin}
                redirectUri="https://surveyagency.netlify.app/linkedin"
            >
                <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
            </LinkedIn>
      </div>
    )
}

export default SignUp;