import { Input } from 'antd';
import { ForwardOutlined } from '@ant-design/icons';
import './style.scss';

const Question = ({ handleChange, survey }) => {
    return (
        <div className="question">
            <div className="question__left">
                <span>{survey.id}</span>
                <ForwardOutlined />
            </div>
            <div className="question__right">
                <div className="question__right__textInput">
                    <Input onChange={(e) => handleChange(e.target.value, "surveyInput", "question")} type="text" value={survey?.question} />
                    <Input onChange={(e) => handleChange(e.target.value, "surveyInput", "description")} type="text" placeholder="Description (optional)" value={survey?.description} />
                </div>
            </div>
        </div>
    )
}

export default Question