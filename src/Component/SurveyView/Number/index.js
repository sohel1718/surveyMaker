import { Input } from 'antd';
import './style.scss';

const Number = ({ disabled }) => {
    return (
        <div className="textbox">
            <Input disabled={disabled} type="text" placeholder="Type your answer here..." />
        </div>
    )
}

export default Number;
