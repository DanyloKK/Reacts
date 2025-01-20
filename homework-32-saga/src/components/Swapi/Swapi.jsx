import SwapiHeader from "../SwapiHeader/SwapiHeader.jsx";
import SwapiInput from "../SwapiInput/SwapiInput.jsx";
import SwapiList from "../SwapiList/SwapiList.jsx";
import SwapiExtraInfo from "../SwapiExtraInfo/SwapiExtraInfo.jsx";
import SwapiFooter from "../SwapiFooter/SwapiFooter.jsx";
import styles from "./Swapi.module.css"

const Swapi = () => {
    return (
        <div>
            <SwapiHeader/>
            <SwapiInput/>
            <div className={styles.swapi__main_block}>
                <SwapiList/>
                <SwapiExtraInfo/>
            </div>
            <SwapiFooter/>
        </div>
    )
}
export default Swapi;