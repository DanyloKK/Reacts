import {useSelector} from 'react-redux'
import selectorTodo from "../../redux/slices/selectorTodo.js";
import styles from "./SwapiList.module.css"
const SwapiList = () => {
    const items = useSelector(selectorTodo.characterInfo.data)

    return (
        <div>
            <h1 className={styles.swapiTitle} >Personal character info!!!</h1>
            <ul >
                {items.map((item) => (
                    <li className={styles.swapiList}  key={item.id}>
                        <p>Name: {item.name}</p>
                        <p>Height: {item.height}</p>
                        <p>Mass: {item.mass}</p>
                        <p>Hair color: {item.hair_color}</p>
                        <p>Skin color: {item.skin_color}</p>
                        <p>Eye color: {item.eye_color}</p>
                        <p>Date of birth: {item.birth_year}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Homeworld: {item.homeworld}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SwapiList;