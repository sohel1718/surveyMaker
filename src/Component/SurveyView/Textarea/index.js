import { Input } from 'antd';
import './style.scss';

const { TextArea } = Input;

const Textarea = ( {disabled} ) => {
    return (
        <div className="textbox">
            <TextArea rows={4} disabled={disabled} type="textarea" placeholder="Type your answer here..." />
        </div>
    )
}

export default Textarea;
