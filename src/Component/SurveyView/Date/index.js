import moment from 'moment';
import { DatePicker } from 'antd';
import './style.scss';

const Date = ({ disabled, handleAnswer, setError, answer}) => {
    return (
        <div className="date">
            <DatePicker onFocus={() => setError("")} disabled={disabled} onChange={(e) => handleAnswer(e.format("DD-MM-YYYY"))} value={answer ? moment(answer, "DD-MM-YYYY") : moment()} />
        </div>
    )
}

export default Date;
