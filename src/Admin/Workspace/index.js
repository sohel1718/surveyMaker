import { useState, useEffect } from 'react';
import CreateForm from '../../Component/CreateForm';
import CreatedForm from '../../Component/CreatedForm';
import { useAuthState } from "react-firebase-hooks/auth"
import { initialData } from '../../Data';
import { db, auth } from "../../firebase"
import './style.scss';
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid';

const Workspace = ({ history }) => {
    const [survey, setSurvey] = useState();
    const [user] = useAuthState(auth);

    useEffect(() => {
        db.collection("workspace")
            .where("uid", "==", user.email)
          .onSnapshot((querySnapShot) => {
            const data = querySnapShot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setSurvey(data);
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
        })
    }
    console.log(survey);
    return (
        <div className="workspace">
            <div className="workspace__wrapper">
                <CreateForm addNewSurvey={addNewSurvey} />
                {
                    survey?.map(data => (
                        <CreatedForm history={history} survey={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Workspace