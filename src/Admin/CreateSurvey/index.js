import ContentBar from '../../Component/ContentBar';
import SelectionBar from '../../Component/SelectionBar';
import SurveyView from '../../Component/SurveyView';
import { useParams } from 'react-router';
import { useAuthState } from "react-firebase-hooks/auth"
import * as AntdIcons from '@ant-design/icons';
import { initialData, DropDownData, pageLayout, LayoutData } from '../../Data';
import { useState, useEffect } from 'react';
import { db, auth } from "../../firebase"
import './style.scss';
import PreviewModal from '../../Component/PreviewModal';
import PreviewPage from '../../Component/PreviewPage';

const CreateSurvey = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [survey, setSurvey] = useState();
    localStorage.setItem('survey', JSON.stringify(survey));
    const currentIndex = survey?.page.findIndex(data => data.id === survey.currentPage);
    const dropDown = DropDownData.filter(data => data.id === +survey?.page[currentIndex].dropDownId)?.[0];

    useEffect(() => {
        db.collection("workspace")
            .where("uid", "==", user.email).where("sid", "==", id)
          .onSnapshot((querySnapShot) => {
            const data = querySnapShot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setSurvey(data[0].survey);
          });
    },[db]);

    const CustomIcon=(type)=>{
        const AntdIcon= AntdIcons[type];
        return <AntdIcon className="selection-bar__type__icon" />
    }

    const handleChange = (value, type, name = "") => {
        const temp = {...survey};
        switch(type) {
            case "surveyInput": {
                temp.page[currentIndex][name] = value;
                setSurvey(temp);
                break;
            }
            case "addPage": {
                temp['currentPage'] = temp.page.length + 1; 
                const newPage = {...pageLayout};
                newPage['id'] = temp.page.length + 1;
                newPage['dropDownId'] = +value;
                setSurvey({currentPage: temp.page.length + 1, ...temp, page: [...temp.page, newPage] }); 
                break;
            }
            case "changeCurrent": {
                temp['currentPage'] = value; 
                setSurvey(temp);
                break;
            }
            case "delete": {
                const index = temp.page.findIndex(data => data.id === +value);
                temp['currentPage'] = temp.page[index - 1].id; 
                if (index > -1) {
                    temp.page.splice(index, 1);
                    let fixID = temp.page.map((data,index) => {
                        data.id = index + 1;
                        return data
                    })
                    temp.page = fixID;
                    setSurvey(temp);
                } 
                break;
            }
            default: {
                type === "surveyName" ? temp[type] = value : temp.page[currentIndex][type] = value; 
                setSurvey(temp);
                break;
            }
        }
        localStorage.setItem('survey', JSON.stringify(temp));
    }

    const handlePreview = () => {
        setIsModalVisible(!isModalVisible);
    } 

    const handlePublish = () => {
        db.collection("workspace").doc(id).update({
            survey: survey
        });
    }

    return (
        <div className="create-survey">
           { survey &&
                <div className="create-survey__wrapper">
                    <div className="create-survey__wrapper__content">
                        <ContentBar
                            survey={survey.page}
                            handleChange={handleChange}
                            DropDownData={DropDownData}
                            CustomIcon={CustomIcon}
                            currentPage={survey.currentPage}
                        />
                    </div>
                    <div className="create-survey__wrapper__view">
                        <SurveyView 
                            handleChange={handleChange}
                            survey={survey.page[currentIndex]}
                            dropDown={dropDown}
                        />
                    </div>
                    <div className="create-survey__wrapper__selection">
                        <SelectionBar
                            handlePreview={handlePreview}
                            handleChange={handleChange}
                            currentIndex={currentIndex}
                            dropDown={dropDown}
                            DropDownData={DropDownData}
                            survey={survey}
                            LayoutData={LayoutData}
                            CustomIcon={CustomIcon} 
                            handlePublish={handlePublish}
                        />
                    </div>
                </div>
           }
            <PreviewModal isModalVisible={isModalVisible} handlePreview={handlePreview}>
                <PreviewPage />
            </PreviewModal>
        </div>
    )
}

export default CreateSurvey;