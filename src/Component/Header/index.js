import { useState } from 'react';
import './style.scss';

const Header = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className="basic-header fix-header">
            <div className="basic-header__left">
                <img src="/images/logo.png" alt="" />
                <span>SurveyAgency</span>
            </div>
            <div className="basic-header__right">
                {
                    !login ? (
                        <div className="basic-header__right__links">
                            <div className="basic-header__right__links__link">How it works?</div>
                            <div className="basic-header__right__links__link">About</div>
                            <div className="basic-header__right__links__link">Contact Us</div>
                            <div className="basic-header__right__links__btn">
                                <span>Login</span>
                                <img src="/images/right-arrow.png" alt="" />
                            </div>
                        </div>
                    ) : (
                        <div className="basic-header__right__loggedIn">
                            <div className="basic-header__right__loggedIn__user">
                                <div className="basic-header__right__loggedIn__user__profile">
                                    <img src="./images/profile.png" alt="" />
                                </div>
                                <div className="basic-header__right__loggedIn__user__name">Sohel chhipa</div>
                                <img src="./images/bottom-arrow.png" alt="" />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header 