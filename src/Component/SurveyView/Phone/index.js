import { Input } from 'antd';
import './style.scss';

const Phone = ({ disabled }) => {
    return (
        <div className="textbox">
            <Input disabled={disabled} type="text" placeholder="9856232341" />
        </div>
    )
}

export default Phone;
