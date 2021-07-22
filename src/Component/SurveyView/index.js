import LayoutOne from './Layout/LayoutOne';
import Components from '../index';
import './style.scss';

const SurveyView = ({ survey, dropDown, handleChange }) => {
    const ComponentToRender = Components[dropDown.component];
    let disabled = false;

    if (dropDown.component === "Textbox" || "Textarea" || "Date" ) {
        disabled = true;
    }
    return (
        <div className="view">
            <LayoutOne survey={survey} handleChange={handleChange} type={dropDown.type}  ComponentToRender={ComponentToRender} disabled={disabled} />
        </div>
    )
}

export default SurveyView