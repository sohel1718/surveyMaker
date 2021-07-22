import Question from "../SurveyView/Question";
import Components from '../index';
import { useState } from 'react'; 
import { DropDownData } from '../../Data';
import { Button } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, WarningFilled } from '@ant-design/icons';
import "./style.scss";
import { Validator } from "../../Utils";

const PreviewPage = () => {
    const [survey, setSurvey] = useState(JSON.parse(localStorage.getItem('survey')));
    const [error, setError] = useState("");
    let compData = {};
    const [pageIndex, setPageIndex] = useState(0);
    const dropDownType = DropDownData.filter(data => data.id === +survey?.page[pageIndex].dropDownId)?.[0];
    const ComponentToRender = Components[dropDownType?.component];
    const handleChange = (type) => {
        if (survey.page.length === pageIndex) {
            return false;
        }
        (type === "prev" && pageIndex !== 0) ? setPageIndex(pageIndex - 1) : setPageIndex(pageIndex + 1);
    }

    const handleAnswer = (answer) => {
        const temp = {...survey};   
        temp.page[pageIndex].answer = answer;
        setSurvey(temp);
    }

    switch (dropDownType?.type) {
        case "Phone": {
            compData = { placeholder: "9090909090", validation: dropDownType?.type }; 
            break;
        }
        case "Email": {
            compData = { placeholder: "survey@gmail.com", validation: dropDownType?.type };
            break;
        }
        case "Website": {
            compData = { placeholder: "https://", validation: dropDownType?.type };
            break;
        }
        case "Number": {
            compData = { placeholder: "Type your answer here...", validation: dropDownType?.type };
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

    const handleSubmit = () => {
        let answer = survey.page[pageIndex].answer;
        const temp = {...survey};
        if (compData.validation) {
            const { valid, errorMessage } = Validator(answer, compData.validation);
            if (!valid) {
                temp.page[pageIndex].answer = "";
                setError(errorMessage);
            } 
        } else if (!answer && survey.page[pageIndex].required) {
            setError("This answer is required");
        }
    }



    return (
        <div className="container">
            {
                survey && (
                    <>
                        <div className="container__submit">
                        {!survey.page[pageIndex].required &&  <button className="container__submit__skip">Skip</button>}
                        </div>
                        <div className="container__preview">
                            <div className="container__preview__left">
                                <img src="/images/bg-img.jpg" alt="" />
                            </div>
                            <div className="container__preview__right">
                                <div className="preview__right__question">
                                    <Question survey={survey.page[pageIndex]} />
                                </div>
                                <div className="container__preview__right__answer">
                                    <ComponentToRender setError={setError} compData={compData} handleAnswer={handleAnswer} answer={survey.page[pageIndex].answer} choice={survey.page[pageIndex].option} preview={true} />
                                </div>
                                <div className="container__preview__right__submit">
                                    <button onClick={()=> {handleSubmit()}}>Ok</button>
                                </div>
                                {
                                    error && (
                                        <div className="container__preview__right__error">
                                            <WarningFilled />
                                            <span>{error}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="container__submit">
                            <div className="container__submit__changePage">
                                <Button disabled={pageIndex === survey.page.length - 1} onClick={() => handleChange("next")} ><ArrowDownOutlined /></Button>
                                <Button disabled={pageIndex === 0} onClick={() => handleChange("prev")}><ArrowUpOutlined /></Button>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default PreviewPage;