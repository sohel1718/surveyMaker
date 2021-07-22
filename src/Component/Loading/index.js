import Loader from "react-loader-spinner";
import './style.scss';

const Loading = () => {
    return (
        <div className="loader">
            <Loader
                type="Ball-Triangle"
                color="#000"
                height={80}
                width={80}
            />
        </div>
    )
}

export default Loading