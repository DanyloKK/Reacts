import List from '../List/List.jsx';
import ExtraInfo from "../ExtraInfo/ExtraInfo.jsx";
import "../../App.css"
const MainInfo = () => {
    return (
        <div className="Main__Block">
            <List/>
            <ExtraInfo/>
        </div>
    )
}
export default MainInfo;