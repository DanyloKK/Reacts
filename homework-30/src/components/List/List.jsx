import {useSelector} from 'react-redux'
import selectors from '../../Redux/slicer/selector.js'
import "../../App.css"

const List = () => {
    const items = useSelector(selectors.common.data)

    return (
        <div>
            <h1 className="Main__Title">Personal character info!!!</h1>
            <ul className="Main__List">
                {items.map((item) => (
                    <li className="Main__List--item" key={item.id}>

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
    )
}
export default List;