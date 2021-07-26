import Axios from 'axios';
import { ContentBar, SelectionBar, SurveyView, PreviewModal, PreviewPage} from '../../Component/mainComponent';
import * as AntdIcons from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuthState } from "react-firebase-hooks/auth"
import {  DropDownData, pageLayout, LayoutData } from '../../Data';
import { message } from 'antd';
import { db, auth } from "../../firebase"
import './style.scss';

const CreateSurvey = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [image, setImage] = useState("");
    const [linkPopup, setLinkPopup] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [survey, setSurvey] = useState();
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

    const handleChange = async(value, type, name = "") => {
        const temp = {...survey};
        switch(type) {
            case "surveyInput": {
                temp.page[currentIndex][name] = value;
                break;
            }
            case "addPage": {
                temp['currentPage'] = temp.page.length + 1; 
                const newPage = {...pageLayout};
                newPage['id'] = temp.page.length + 1;
                newPage['dropDownId'] = +value;
                temp['page'] = [...temp.page, newPage];
                break;
            }
            case "changeCurrent": {
                temp['currentPage'] = value; 
                break;
            }
            case "fileUpload": {
                if (image === value.file.originFileObj.name) {
                    return false;
                }
                const formData = new FormData();
                setImage(value.file.originFileObj.name);
                formData.append("file", value.file.originFileObj);
                formData.append("upload_preset", "ehd9m4r9");
                await Axios.post("https://api.cloudinary.com/v1_1/djblgcmzg/upload",formData).then(res => {
                    temp["image"] = res.data.url;
                    message.success('image uploaded successfully');
                })
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
                } 
                break;
            }
            default: {
                type === "surveyName" ? temp[type] = value : temp.page[currentIndex][type] = value; 
                break;
            }
        }
        setSurvey(temp);
        db.collection("workspace").doc(id).update({
            survey: temp
        });
    }

    const handlePreview = () => {
        setIsModalVisible(!isModalVisible);
    } 

    const handlePublish = () => {
        message.success('Survey published successfully');
        setLinkPopup(!linkPopup);
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
                            image={survey.image}
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
                            linkPopup={linkPopup}
                            sid={id}
                            setLinkPopup={setLinkPopup}
                        />
                    </div>
                </div>
           }
            <PreviewModal isModalVisible={isModalVisible} handlePreview={handlePreview}>
                <PreviewPage sid={id} />
            </PreviewModal>
        </div>
    )
}

export default CreateSurvey;