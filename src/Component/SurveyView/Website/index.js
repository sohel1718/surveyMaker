import { Input } from 'antd';
import './style.scss';

const Website = ({ disabled }) => {
    return (
        <div className="textbox">
            <Input disabled={disabled} type="text" placeholder="https://" />
        </div>
    )
}

export default Website;
