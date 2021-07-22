import './style.scss';
const CreateForm = ({ addNewSurvey }) => {
    return (
        <div className="create-form">
            <div className="create-form__name">New Survey Form</div>
            <div onClick={() => {addNewSurvey()}} className="create-form__icon">
                <img src="/images/plus.png" alt="" />
            </div>
        </div>
    )
}

export default CreateForm;