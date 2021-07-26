import { useState } from 'react';
import { db } from "../../firebase"
import { message } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import PreviewModal from '../PreviewModal';
import Response from '../Response';
import './style.scss';

const CreatedForm = ({ survey, history }) => {
    const [isOpen, setIsOpen] = useState(false);

   
    const handleSurvey = () => {
      history.push(`/create/${survey.sid}`)
    }

    const handleDelete = () => {
      db.collection("workspace").doc(survey.sid).delete().then(() => {
        message.success('Your survey successfully deleted');
    }).catch((error) => {
        message.warning('Failed to deleted survey',error);
    });
    }

    return (
      <div className="created-form">
          <div onClick={() => handleSurvey()} className="created-form__name">
                { survey.survey.surveyName }
          </div>
          <div className="created-form__footer">
            <div className="created-form__footer__response">
              {
                survey.response.length === 0 ? 
                <div className="created-form__footer__response">no response</div> :
                <div onClick={() => setIsOpen(true)}className="created-form__footer__response-found">{survey.response.length} response</div>
              }
            </div>
            <div onClick={() => handleDelete()} className="created-form__footer__delete">
              <DeleteFilled />
            </div>
          </div>
          <PreviewModal isModalVisible={isOpen} handlePreview={() => setIsOpen(!isOpen)}>
                <Response data={survey.response} />
          </PreviewModal>
      </div>  
    )
}

export default CreatedForm;