import { Input } from 'antd';
import './style.scss';

const Feedback = () => {
    return (
        <div className="Feedback">
            <div className="Feedback__wrapper">
                <div className="Feedback__wrapper__img">
                    <img src="/images/angry.png" alt="" />
                </div>
                <div className="Feedback__wrapper__img">
                    <img src="/images/sad.png" alt="" />
                </div>
                <div className="Feedback__wrapper__img">
                    <img src="/images/happy.png" alt="" />
                </div>
                <div className="Feedback__wrapper__img">
                    <img src="/images/in-love.png" alt="" />
                </div>
                <div className="Feedback__wrapper__img">
                    <img src="/images/in-love-2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Feedback;
