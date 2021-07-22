import { auth } from "../../firebase"
import './style.scss';

const Header = ({ history, user }) => {
    
    return (
        <div className="basic-header fix-header">
            <div onClick={() => history.push('/')} className="basic-header__left">
                <img src="/images/logo.png" alt="" />
                <span>SurveyAgency</span>
            </div>
            <div className="basic-header__right">
                {
                    !user ? (
                        <div className="basic-header__right__links">
                            <div className="basic-header__right__links__link">How it works?</div>
                            <div className="basic-header__right__links__link">About</div>
                            <div className="basic-header__right__links__link">Contact Us</div>
                            <div onClick={() => history.push('/login')} className="basic-header__right__links__btn">
                                <span>Login</span>
                                <img src="/images/right-arrow.png" alt="" />
                            </div>
                        </div>
                    ) : (
                        <div className="basic-header__right__loggedIn">
                            <div className="basic-header__right__loggedIn__user">
                                <div className="basic-header__right__loggedIn__user__profile">
                                    <img src={user.photoURL} alt="" />
                                </div>
                                <div className="basic-header__right__loggedIn__user__name">{user.displayName}</div>
                                <img src="./images/bottom-arrow.png" alt="" />
                            </div>  
                            <div onClick={() => auth.signOut()} className="basic-header__right__links__btn">
                                <span>Log out</span>
                                <img src="/images/right-arrow.png" alt="" />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header 