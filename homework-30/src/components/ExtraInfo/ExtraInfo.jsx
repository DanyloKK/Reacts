import {useSelector} from 'react-redux'
import selectors from '../../Redux/slicer/selector.js'
import "../../App.css"

const ExtraInfo = () => {
    const extraInfo = useSelector(selectors.common.data)
    return (
        <div>
            <h1 className="Extra__Title">Extra info</h1>
            {extraInfo.map((item, index) => (
                    <div key={index}>
                        <ul>
                            <li className="Extra__List--item">First movie:{item.films[0]}</li>
                            <li className="Extra__List--item">Second movie:{item.films[1]}</li>
                            <li className="Extra__List--item">Third movie:{item.films[2]}</li>
                            <li className="Extra__List--item">Fourth movie:{item.films[3]}</li>
                        </ul>
                        <ul>
                            <li className="Extra__List--item">Best car:{item.vehicles[0]}</li>
                            <li className="Extra__List--item">Spare car:{item.vehicles[1]}</li>
                        </ul>
                        <ul>
                            <li className="Extra__List--item">Starship number 1:{item.starships[0]}</li>
                            <li className="Extra__List--item">Starship number 2:{item.starships[1]}</li>
                        </ul>
                    </div>
                )
            )}
        </div>
    )
}
export default ExtraInfo;