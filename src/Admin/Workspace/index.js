import CreateForm from '../../Component/CreateForm';
import CreatedForm from '../../Component/CreatedForm';
import './style.scss';

const Workspace = () => {
    return (
        <div className="workspace">
            <div className="workspace__wrapper">
                <CreateForm />
                <CreatedForm />
            </div>
        </div>
    )
}

export default Workspace