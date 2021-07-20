import './style.scss';

const CreatedForm = () => {
    return (
      <div className="created-form">
          <div className="created-form__name">
                My SurveyForm
          </div>
          <div className="created-form__footer">
            <div className="created-form__footer__response">
                <div className="created-form__response">no response</div>
            </div>
            <div>
                <img src="/images/more.png" alt="" />
            </div>
          </div>
      </div>  
    )
}

export default CreatedForm;