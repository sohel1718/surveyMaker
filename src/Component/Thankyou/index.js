import { Result, Button } from 'antd';
import './style.scss';

const Thankyou = ({history}) => {
    return (
        <div className="thank-you">
             <Result
                status="success"
                title="Your Response Is Successfully Registered!"
                subTitle="If you want to create survey like this go to surveyAgency.com"
            />
            <Button onClick={() => history.goBack()}>Reload</Button>
        </div>
    )
}

export default Thankyou;