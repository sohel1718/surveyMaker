import './style.scss';

const Feedback = ({disabled, answer, handleAnswer, setError }) => {

    const handleChange = (rating) => {
        if (!disabled) {
            handleAnswer(rating)
            setError("");
        }
    }

    const feed =  Array(5).fill(5);

    return (
        <div className="Feedback">
            <div className="Feedback__wrapper">
                {
                    feed.map((data,index) => {
                        return (
                            <div onClick={() => handleChange(index+1)} className={`Feedback__wrapper__img ${answer === index+1 ? "Feedback__wrapper__active" : ""}`}>
                                <img src={`/images/feedback${index+1}.png`} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Feedback;
