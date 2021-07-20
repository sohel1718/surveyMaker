import { Input } from 'antd';
import './style.scss';

const Email = ({ disabled }) => {
    return (
        <div className="textbox">
            <Input disabled={disabled} type="text" placeholder="survey@email.com" />
        </div>
    )
}

export default Email;
