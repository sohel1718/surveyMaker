import { Button, message } from 'antd';
import './style.scss';

const LinkGenerator = ({ sid, setLinkPopup }) => {
    const link = `${window.location.origin}/survey/${sid}`;
    debugger
    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        message.success('link copied!');
        setLinkPopup(false);
    }
    return (
        <div className="link">
            <div className="link__wrapper">
                <span className="link__wrapper__text">{window.location.origin}/survey/</span>
                <Button onClick={() => handleCopy()} >Copy</Button>
            </div>
        </div>
    )
}

export default LinkGenerator;