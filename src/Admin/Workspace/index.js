import { useState, useEffect } from 'react';
import CreateForm from '../../Component/CreateForm';
import CreatedForm from '../../Component/CreatedForm';
import { useAuthState } from "react-firebase-hooks/auth";
import { message } from 'antd';
import { initialData } from '../../Data';
import { db, auth } from "../../firebase"
import './style.scss';
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid';
import Loader from 'react-loader-spinner';

const Workspace = ({ history }) => {
    const [survey, setSurvey] = useState();
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.collection("workspace")
            .where("uid", "==", user.email)
          .onSnapshot((querySnapShot) => {
            const data = querySnapShot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setSurvey(data);
            setLoading(false);
          });
      }, [db]);

    const addNewSurvey = () => {
        const sid = uuidv4();
        db.collection("workspace").doc(sid).set({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            survey: initialData,
            uid: user.email,
            sid,
            response: []
        }).then(() => {
            message.success('Your survey successfully added');
        }).catch((error) => {
            message.warning('Failed to add survey',error);
        });
    }
    
    return (
        <div className="workspace">
            <div className="workspace__wrapper">
                <CreateForm addNewSurvey={addNewSurvey} />
                {
                   !loading ? survey?.map(data => (
                        <CreatedForm history={history} survey={data} />
                    )) : (
                        <div className="workspace__wrapper__loader">
                            <Loader
                                type="ThreeDots"
                                color="#000"
                                height={50}
                                width={50}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Workspace