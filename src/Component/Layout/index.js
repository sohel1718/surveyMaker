import Header from '../Header';
import { Route, Redirect  } from 'react-router-dom';
import './style.scss';

const Layout = ({isAuthenticated, component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => isAuthenticated ?
                (
                    <div className="layout">
                        <Header user={isAuthenticated} history={props.history} />
                        <div className="layout__content">
                            <Component {...props} />
                        </div>
                    </div>
                ) : ( <Redirect to={{ pathname: '/login', user: isAuthenticated, state: { from: props.location } }} />)
            }
        />
    )
}

export default Layout