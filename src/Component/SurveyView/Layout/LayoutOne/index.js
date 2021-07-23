import { useState, useEffect } from 'react';
import { getValidationType } from '../../../../Utils';
import Question from '../../Question';
import './style.scss';

const LayoutOne = ({ survey, ComponentToRender, disabled, handleChange, type, image }) => {
    const [choice, setChoice] = useState([]);
    let compData = getValidationType(type);

    useEffect(() => {   
        setChoice(survey.option)
    },[survey.option])

    const handleChoice = (type, value, id) => {
        const temp = choice?.length > 0 ? [...choice] : [];
        const index = temp.findIndex(data => data.id === id);
        if (type === "add") {
            temp.push({id: temp.length + 1, value: ""});
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
        <div className={`layout-one ${survey.layout === 2 ? "layout-two" : ""}`}>
            <div className={`layout-one__left ${survey.layout === 3 ? "layout-one__layout-three" : ""}`}>
                <img src={image} alt="" />
            </div>
            <div className="layout-one__right">
                <div className="layout-one__right__question">
                    <Question handleChange={handleChange} survey={survey} />
                </div>
                <div className="layout-one__right__answer">
                    <ComponentToRender compData={compData} disabled={disabled} survey={survey} handleChoice={handleChoice} choice={choice} />
                </div>
            </div>
            <div className="layout-one__submit">

            </div>
        </div>
    )
}

export default LayoutOne;