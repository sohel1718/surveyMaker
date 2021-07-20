import Header from '../Header';
import { Route } from 'react-router-dom';
import './style.scss';

const Layout = ({isAuthenticated, component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => isAuthenticated && 
                (
                    <div className="layout">
                        <Header />
                        <div className="layout__content">
                            <Component {...props} />
                        </div>
                    </div>
                )
            }
        />
    )
}

export default Layout