import { useState, useEffect } from 'react';
import Question from '../../Question';
import './style.scss';

const LayoutOne = ({ survey, ComponentToRender, disabled, handleChange, type }) => {
    const [choice, setChoice] = useState();
    let compData = {};

    useEffect(() => {
        setChoice(survey.option)
    },[survey.option])

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

    switch (type) {
        case "Phone": {
            compData = { placeholder: "9090909090", validation: type }; 
            break;
        }
        case "Email": {
            compData = { placeholder: "survey@gmail.com", validation: type };
            break;
        }
        case "Website": {
            compData = { placeholder: "https://", validation: type };
            break;
        }
        case "Number": {
            compData = { placeholder: "Type your answer here...", validation: type };
            break;
        }
        case "Textbox": {
            compData = { placeholder: "Type your answer here...", validation: null };
            break;
        }
        default: {
            break;
        }
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
                    <ComponentToRender compData={compData} disabled={disabled} survey={survey} handleChoice={handleChoice} choice={choice} />
                </div>
            </div>
            <div className="layout-one__submit">

            </div>
        </div>
    )
}

export default LayoutOne;