import Header from '../../Component/Header';
import './style.scss';

const Home = ({user, history}) => {

    const handleStart = () => {
        if (user) {
            history.push('/workspace');
        } else {
            history.push('/login');
        }
    } 

    return (
        <div className="home">
            <Header user={user} history={history} />
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
                    <div onClick={() => handleStart()} className="home__wrapper__left__btn">
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