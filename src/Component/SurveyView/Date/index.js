import { Calendar } from 'antd';
import './style.scss';

const Date = ({ disabled }) => {
    return (
        <div className="date">
            <Calendar disabledDate={() => disabled} fullscreen={false} />
        </div>
    )
}

export default Date;
