import {useSelector} from 'react-redux';
import selectors from "../../redux/slicer/selectors.js"
const Footer = () =>{
    const todoLength = useSelector(selectors.length.value);
    return (
        <footer>
            <span>Amount of tasks:{todoLength}</span>
        </footer>
    )
}
export default Footer