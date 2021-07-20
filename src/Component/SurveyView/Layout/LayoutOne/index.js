import { useState } from 'react';
import Question from '../../Question';
import './style.scss';

const LayoutOne = ({ survey, ComponentToRender, disabled, handleChange }) => {
    const [choice, setChoice] = useState([{id: 1, value: ""}]);

    const handleChoice = (type, value, id) => {
        const temp = [...choice];
        const index = temp.findIndex(data => data.id === id);
        if (type === "add") {
            temp.push({id: choice.length + 1, value: ""});
            setChoice(temp);
        } else if (type === "input") {
            temp[index].value = value;
            setChoice(temp);
        } else if (type === "delete") {
            temp.splice(index, 1);
            let fixID = temp.map((data,index) => {
                data.id = index + 1;
                return data
            })
            temp.page = fixID;
            setChoice(temp);
        }
        handleChange(temp, "surveyInput", "option");
    }

    return (
        <div className="layout-one">
            <div className="layout-one__left">
                <img src="/images/bg-img.jpg" alt="" />
            </div>
            <div className="layout-one__right">
                <div className="layout-one__right__question">
                    <Question handleChange={handleChange} survey={survey} />
                </div>
                <div className="layout-one__right__answer">
                    <ComponentToRender disabled={disabled} survey={survey} handleChoice={handleChoice} choice={choice} />
                </div>
            </div>
            <div className="layout-one__submit">

            </div>
        </div>
    )
}

export default LayoutOne;