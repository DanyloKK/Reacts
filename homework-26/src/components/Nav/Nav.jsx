import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    const {children,href} = props;

    return (
        <div className="nav-container">
            <NavLink className="nav-links" to={href}>{children}</NavLink>
        </div>

    )
}
export default Nav