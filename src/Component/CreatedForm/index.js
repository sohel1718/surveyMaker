import './style.scss';

const CreatedForm = ({ survey, history }) => {

    const handleSurvey = () => {
      history.push(`/create/${survey.sid}`)
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
              <div className="created-form__response">no response</div> :
              <div className="created-form__response">{survey.response.length} response</div>
            }
    
            </div>
            <div>
                <img src="/images/more.png" alt="" />
            </div>
          </div>
      </div>  
    )
}

export default CreatedForm;