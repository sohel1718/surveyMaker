import { Input } from 'antd';
import './style.scss';

const Textbox = ({disabled, compData, answer, handleAnswer, setError}) => {
    return (
        <div className="textbox">
            <Input onFocus={() => setError("")} onChange={(e) => handleAnswer(e.target.value)} disabled={disabled} type="text" placeholder={compData.placeholder} value={answer} />
        </div>
    )
}

export default Textbox;
