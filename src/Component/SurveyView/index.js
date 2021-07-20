import LayoutOne from './Layout/LayoutOne';
import Components from '../index';
import './style.scss';

const SurveyView = ({ survey, dropDown, handleChange }) => {
    const ComponentToRender = Components[dropDown.type];
    let disabled = false;

    if (dropDown.type === "Textbox" || "Number" || "Phone" || "email" || "website" || "Textarea" || "Date" ) {
        disabled = true;
    }
    return (
        <div className="view">
            <LayoutOne survey={survey} handleChange={handleChange}  ComponentToRender={ComponentToRender} disabled={disabled} />
        </div>
    )
}

export default SurveyView