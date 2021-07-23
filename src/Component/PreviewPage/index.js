import Question from "../SurveyView/Question";
import Components from '../index';
import { useState, useEffect } from 'react'; 
import { DropDownData } from '../../Data';
import { Button, message } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, WarningFilled } from '@ant-design/icons';
import { db } from "../../firebase";
import { getValidationType, Validator } from "../../Utils";
import { useParams } from 'react-router';
import "./style.scss";
import moment from "moment";

const PreviewPage = ({ sid, history }) => {
    const { surveyID } = useParams();
    const [survey, setSurvey] = useState();
    const [error, setError] = useState("");
    const [pageIndex, setPageIndex] = useState(0);
    const dropDownType = DropDownData.filter(data => data.id === +survey?.page[pageIndex]?.dropDownId)?.[0];
    const ComponentToRender = Components[dropDownType?.component];
    let compData = (dropDownType && getValidationType(dropDownType.type));

    useEffect(() => {
        db.collection("workspace")
            .doc(surveyID ? surveyID : sid)
          .onSnapshot((querySnapShot) => {
            setSurvey(querySnapShot?.data()?.survey);
            setPageIndex(0);
          });
    },[db]);

    const handleChange = (type) => {
        if (survey.page[pageIndex]?.required && !survey.page[pageIndex].answer) {
            setError("This answer is required");
            return false;
        }
        if (survey.page.length === pageIndex) {
            return false;
        }
        (type === "prev" && pageIndex !== 0) ? setPageIndex(pageIndex - 1) : setPageIndex(pageIndex + 1);
    }

    const handleAnswer = (answer) => {
        const temp = {...survey};   
        temp.page[pageIndex].answer = answer;
        setSurvey(temp);
        if (answer) {
            setError("");
        }
    }

    

    const handleSubmit = () => {
        let answer = survey.page[pageIndex].answer;
        const temp = {...survey};
        if (compData.validation && !answer) {
            const { valid, errorMessage } = Validator(answer, compData.validation);
            if (!valid) {
                temp.page[pageIndex].answer = "";
                setError(errorMessage);
            } 
        } else if (!answer && survey.page[pageIndex].required) {
            setError("This answer is required");
        } else {
            if (survey.page.length === pageIndex + 1) {
                if(surveyID) {
                    let response = {};
                    response =  survey.page.map(data => {
                        return {...response, ["question" + data.id.toString()]: data.question, ["answer" + data.id.toString()]: data.answer}
                    });
                    db.collection("responses").add({
                        response,
                        sid: surveyID,
                        date: moment().format("DD MMM YYYY H:i:s")
                    }).then(() => {
                        history.push('/thank-you'); 
                    }).catch((error) => {
                        message.warning('Failed to save your response',error);
                    });
                } else {
                    message.success("preview done");
                }
                return false;
            } else {
                handleChange("next");
            }
        }
    }

    return (
        <div className={`container ${survey?.page[pageIndex]?.layout === 3 ? "container-layout" : ""}`}>
            {
                survey?.page?.[pageIndex] && (
                    <>
                        <div id={`${surveyID ? "preview-mode" : ""}`} className={`container__preview  ${survey.page[pageIndex]?.layout === 2 ? "container__layout-two" : ""}`}>
                            <div id={`${surveyID ? "preview-mode" : ""}`} className={`container__preview__left ${survey.page[pageIndex]?.layout === 3 ? "container__preview__layout-three" : ""}`}>
                                <img src={survey.image} alt="" />
                            </div>
                            <div id={`${surveyID ? "preview-mode" : ""}`}  className="container__preview__right">
                                <div className="preview__right__question">
                                    <Question survey={survey.page[pageIndex]} />
                                </div>
                                <div className="container__preview__right__answer">
                                    <ComponentToRender 
                                        setError={setError}
                                        compData={compData}
                                        handleAnswer={handleAnswer}
                                        answer={survey.page[pageIndex]?.answer}
                                        choice={survey.page[pageIndex]?.option} 
                                        preview={true}
                                    />
                                </div>
                                <div className="container__preview__right__submit">
                                    <button onClick={()=> {handleSubmit()}}>{survey.page.length === pageIndex + 1 ? "Submit" : "Ok"}</button>
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
                            <div className="container__submit">
                            {!survey.page[pageIndex]?.required &&  <button onClick={() => handleChange("next")} className="container__submit__skip">Skip</button>}
                            <div className="container__submit__changePage">
                                <Button disabled={pageIndex === survey.page.length - 1} onClick={() => handleChange("next")} >
                                    <ArrowDownOutlined />
                                </Button>
                                <Button disabled={pageIndex === 0} onClick={() => handleChange("prev")}>
                                    <ArrowUpOutlined />
                                </Button>
                            </div>
                        </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default PreviewPage;