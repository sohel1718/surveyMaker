import { Input } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './style.scss';

const MultipleChoice = ({ handleChoice, choice }) => {

    return (
        <div className="multiple-choice">
            <div className="multiple-choice__wrapper">
                {
                    choice.map(data => {
                        return (
                            <div className="multiple-choice__wrapper__choice">
                                <span className="multiple-choice__wrapper__choice__num">{data.id}</span>
                                <Input onChange={(e) => handleChoice("input", e.target.value, data.id)} type="text" />
                                <CloseCircleOutlined onClick={() => handleChoice("delete", null, data.id)} className="multiple-choice__wrapper__choice__icon" />
                            </div>
                        )
                    })
                }
            </div>
            <div onClick={() => handleChoice("add", null, null)} className="multiple-choice__add">
                Add choice
            </div>
        </div>
    )
}

export default MultipleChoice;