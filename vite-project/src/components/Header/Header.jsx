import selectors from "../../redux/slice/selectors.js";
import {useSelector} from "react-redux";
const Header = () =>{
    const select = useSelector(selectors.counters.value)
    return (
        <div>
            <span>Value:{select}</span>
        </div>
    )
}
export default Header;