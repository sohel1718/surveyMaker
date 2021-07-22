import Header from '../../Component/Header';
import { auth, provider } from "../../firebase";
import { GoogleCircleFilled } from '@ant-design/icons';
import './style.scss';

const Login = ({ history, user }) => {
    if (user) {
        history.push('./workspace');
    }
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <div className="login">
            <Header history={history} />
            <div className="login__wrapper">
                <span className="login__wrapper__title">Login with your account</span>
                <button onClick={() => signIn()} ><GoogleCircleFilled /> <span>Login with google</span></button>
            </div>
        </div>
    )
}

export default Login