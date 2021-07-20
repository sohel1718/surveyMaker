import BasicHeader from '../../Component/Header';
import './style.scss';

const Home = () => {


    return (
        <div className="home">
            <BasicHeader />
            <div className="home__wrapper">
                <div className="home__wrapper__left">
                    <div className="home__wrapper__left__title">
                        There's a better way to ask
                    </div>
                    <div className="home__wrapper__left__desc">
                        You don't want to make a boring form.
                        And your audience won't answer one.
                        Create a typeform instead—and make everyone happy.
                    </div>
                    <div className="home__wrapper__left__btn">
                        <span>Let's get started</span>
                    </div>
                </div>
                <div className="home__wrapper__right">
                    <img src="/images/bg.jpg" alt="" />
                </div>
            </div>      
        </div>
    )
}

export default Home;