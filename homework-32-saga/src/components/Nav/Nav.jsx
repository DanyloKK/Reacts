import {NavLink} from 'react-router-dom';
import styles from "./Nav.module.css"
const Nav = (props) =>{
    const {children,href} = props;
    return (
        <div className="nav-container">
            <NavLink className={styles.navLinks} to={href}>{children}</NavLink>
        </div>
    )
}
export default Nav;