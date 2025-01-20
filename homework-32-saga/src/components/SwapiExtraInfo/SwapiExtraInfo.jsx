import {useSelector} from 'react-redux'
import selectorTodo from "../../redux/slices/selectorTodo.js";
import styles from "./SwapiExtraInfo.module.css";
const SwapiExtraInfo = () => {
    const extraInfo = useSelector(selectorTodo.characterInfo.data)
    return (
        <div>
            <h1 className={styles.swapiTitles}>Extra info</h1>
            {extraInfo.map((item, index) => (
                    <div key={index}>
                        <ul className={styles.swapiList}>
                            <li className={styles.swapiItem}>First movie:{item.films[0]}</li>
                            <li className={styles.swapiItem}>Second movie:{item.films[1]}</li>
                            <li className={styles.swapiItem}>Third movie:{item.films[2]}</li>
                            <li className={styles.swapiItem}>Fourth movie:{item.films[3]}</li>
                        </ul>
                        <ul className={styles.swapiList}>
                            <li className={styles.swapiItem}>Best car:{item.vehicles[0]}</li>
                            <li className={styles.swapiItem}>Spare car:{item.vehicles[1]}</li>
                        </ul>
                        <ul className={styles.swapiList}>
                            <li className={styles.swapiItem}>Starship number 1:{item.starships[0]}</li>
                            <li className={styles.swapiItem}>Starship number 2:{item.starships[1]}</li>
                        </ul>
                    </div>
                )
            )}
        </div>
    )
                }
export default SwapiExtraInfo;