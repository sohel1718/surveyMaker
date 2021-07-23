import { Input } from 'antd';
import { CloseCircleOutlined, CheckOutlined } from '@ant-design/icons';
import './style.scss';

const MultipleChoice = ({ handleChoice, choice, preview = false, handleAnswer = null, answer }) => {
    return (
        <div className="multiple-choice">
            <div className="multiple-choice__wrapper">
                {
                    choice?.map(data => {
                        return (
                            <div onClick={() => handleAnswer?.(data.id)} className={`multiple-choice__wrapper__choice ${answer === data.id ? "multiple-choice__wrapper__active" : ""}`}>
                                <span className="multiple-choice__wrapper__choice__num">{data.id}</span>
                                <Input readOnly={preview} onChange={(e) => handleChoice("input", e.target.value, data.id)} type="text" value={data.value} />
                                {
                                    !preview && (
                                        <CloseCircleOutlined onClick={() => handleChoice("delete", null, data.id)} className="multiple-choice__wrapper__choice__icon" value={data.value} />
                                    )
                                }
                                {
                                    (preview && answer === data.id) && (
                                        <CheckOutlined className="multiple-choice__wrapper__choice__icon" />
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
            {
                !preview && (
                    <div onClick={() => handleChoice("add", null, null)} className="multiple-choice__add">
                        Add choice
                    </div>
                )
            }
        </div>
    )
}

export default MultipleChoice;